'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'next-themes';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'app/i18n/client';
import cn from 'classnames';
import { PetNameGeneratorFormInputs } from 'types/petNameGeneratorFormInputs';
import { Theme } from 'enums/Theme';
import { petNameGeneratorFormSchema } from 'constants/petNameGeneratorFormSchema';
import { Loader } from 'components/Loader';
import { Error as ErrorBoundary } from 'components/Error';
import styles from 'components/PetNameGeneratorForm/PetNameGeneratorForm.module.scss';

type PetNameGeneratorFormProps = {
  language: string;
}

export const PetNameGeneratorForm: FC<PetNameGeneratorFormProps> = ({ language }): ReactElement => {
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorAPI, setErrorAPI] = useState<string>('');

  const { t: translateHomePage } = useTranslation(language, 'home-page');
  const submitButtonText = translateHomePage('submitButton');
  const inputPlaceholderText = translateHomePage('petNameGeneratorInputPlaceholder');

  const { theme } = useTheme();
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  const {
    register, formState: { errors }, handleSubmit
  } = useForm<PetNameGeneratorFormInputs>({
    resolver: yupResolver(petNameGeneratorFormSchema)
  })

  useEffect(() => {
    setIsComponentMounted(true);
  }, [])

  if (!isComponentMounted) {
    return <Loader />
  }

  const onSubmit = async (formData: PetNameGeneratorFormInputs): Promise<void> => {
    try {
      setResult('');
      setIsLoading(true);

      const response = await axios.post('/api/generate', {
        petDescription: formData.petDescription,
        language
      });

      setResult(response.data.bardResponse);
      setIsLoading(false);
    } catch (error: unknown) {
      setIsLoading(false);

      if (error instanceof AxiosError) {
        setErrorAPI(error.response?.data.error || error.message);

        return;
      }

      setErrorAPI('Something went wrong');
    }

  };

  return (
    <section className={styles.section}>
      <div className={cn({[styles.formWrapper]: isLoading || result})}>
        <form
          className={styles.form}
          method="get"
          onSubmit={handleSubmit(onSubmit)}
            >
          <div className={styles.inputAndSubmitButtonWrapper}>
            <div className={styles.inputWrapper}>
              <input
                {...register('petDescription')}
                className={cn(
                styles.input,
                {[styles.inputLightTheme]: theme === Theme.Light},
                {[styles.inputDarkTheme]: theme === Theme.Dark},
                )}
                placeholder={inputPlaceholderText}
                type="text"
            />
              {errors.petDescription && <p className={styles.error}>{errors.petDescription.message}</p>}
            </div>
            <button
              className={cn(
              styles.submitButton,
              {[styles.submitButtonLightTheme]: theme === Theme.Light},
              {[styles.submitButtonDarkTheme]: theme === Theme.Dark}
              )}
              disabled={isLoading}
              type="submit"
          >
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
      {errorAPI && (
        <div className={styles.errorWrapper}>
          <ErrorBoundary errorMessage={errorAPI} />
        </div>
      )}
      {isLoading && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Loader />
        </motion.div>
      )}
      <AnimatePresence>
        {result && (
          <motion.p
            className={styles.reponse}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
          >
            {result}
          </motion.p>
      )}
      </AnimatePresence>
    </section>
  );
}
