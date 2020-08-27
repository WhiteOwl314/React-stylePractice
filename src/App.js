import React from 'react';
import Plus from "./components/plus/Plus";
import "./App.scss"

function App() {
  return (
      <div className="App">
          <div className="plus">
              {/*추가해야 할 것 :
                size, color, outline, fullWidth
              */}
              <Plus
                  color="lime"
                  size="large"
                  onClick={()=>console.log('클릭됨')}
              >
                  Plus
              </Plus>
              <Plus
                  color="yellow"
                  size="medium"
                  outline
              >
                  Plus
              </Plus>
              <Plus
                  color="orange"
                  size="small"
                  fullWidth
              >
                  Plus
              </Plus>
          </div>
      </div>
  );
}

export default App;
