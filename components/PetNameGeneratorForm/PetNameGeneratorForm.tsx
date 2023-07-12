'use client';

import { FC, ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'next-themes';
import { useTranslation } from 'app/i18n/client';
import cn from 'classnames';
import { PetNameGeneratorFormInputs } from 'types/petNameGeneratorFormInputs';
import { Theme } from 'enums/Theme';
import { petNameGeneratorFormSchema } from 'constants/petNameGeneratorFormSchema';
import { Loader } from 'components/Loader';
import styles from 'components/PetNameGeneratorForm/PetNameGeneratorForm.module.scss';

type PetNameGeneratorFormProps = {
  language: string;
}

export const PetNameGeneratorForm: FC<PetNameGeneratorFormProps> = ({ language }): ReactElement => {
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
    return <Loader />;
  }

  const onSubmit = (formData: PetNameGeneratorFormInputs): void => {
    // eslint-disable-next-line no-console
    console.log(formData);
  }

  return (
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
          type="submit"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
    );
}
