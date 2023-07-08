import React from 'react';
import { ErrorWrapper } from './ErrorWrapper';
const ErrorMessage: React.FC = () => {
  return (
    <ErrorWrapper>
      <h1>Something went wrong.</h1>
      <h2>🔧 We are working on it 🔧</h2>
      <h3>Try to reload page in a minute</h3>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
