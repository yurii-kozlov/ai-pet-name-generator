'use client';

import { FC, ReactElement } from 'react';

type ErrorProps = {
  error: Error;
};

const Error: FC<ErrorProps> = ({ error }): ReactElement => (
  <div>
    <h1>OOOps!!! Something went wrong. {error.message}</h1>
  </div>
);

export default Error;
