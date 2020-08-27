import React from 'react';
import "./App.scss"
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button/Button';

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    &+&{
        margin-top: 1rem;
    }
`;

function App() {
  return (
      <ThemeProvider
          theme={{
              palette: {
                  blue: '#228be6',
                  gray: '#495057',
                  pink: '#f06595'
              }
          }}
      >
          <AppBlock>
              <Button size="large">BUTTON</Button>
              <Button color="gray" size="medium" outline>BUTTON</Button>
              <Button color="pink" size="small" fullWidth>BUTTON</Button>
          </AppBlock>
      </ThemeProvider>
  );
}

export default App;
