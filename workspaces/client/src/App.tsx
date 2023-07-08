import React, { useState } from 'react';
import Search from '../components/search/Search';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import './index.css';

const App: React.FC = () => {
  const [isErrorState, setIsErrorState] = useState<boolean>(false);
  return (
    <>
      {isErrorState ? (
        <ErrorMessage />
      ) : (
        <Search setIsErrorState={setIsErrorState} />
      )}
    </>
  );
};

export default App;
