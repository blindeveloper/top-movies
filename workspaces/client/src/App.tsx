import React, { useState } from 'react';
import { Container } from 'react-grid-system';
import Search from './components/search/Search';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import { SearchWrapper } from './components/search/Styled.Search';

import './index.css';

const App: React.FC = () => {
  const [isErrorState, setIsErrorState] = useState<boolean>(false);

  return (
    <>
      {isErrorState ? (
        <ErrorMessage />
      ) : (
        <Container fluid>
          <SearchWrapper>
            <Search setIsErrorState={setIsErrorState} />
          </SearchWrapper>
        </Container>
      )}
    </>
  );
};

export default App;
