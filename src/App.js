import React from 'react';
import "./App.scss"
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button/Button';
import Dialog from "./components/dialog/Dialog";

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
          <>
              <AppBlock>
                  <Button size="large">BUTTON</Button>
                  <Button color="gray" size="medium" outline>BUTTON</Button>
                  <Button color="pink" size="small" fullWidth>BUTTON</Button>
              </AppBlock>
              <Dialog
                  title="정말로 삭제하시겠습니까?"
                  confirmText="삭제"
                  cancelText="취소"
              >
                  데이터를 정말로 삭제하시겠습니까?
              </Dialog>
          </>
      </ThemeProvider>
  );
}

export default App;
