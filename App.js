import './App.css';
import './index.css';
import Content from './Content';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('')
  const [darktext, setDarktext] = useState(true)

  return (
    <div>
      <Content
        color={color}
        darktext ={darktext}

      />
      <Input
        color={color}
        setColor ={setColor}
        darktext ={darktext}
        setDarktext ={setDarktext}
      />
    </div>
    
  );
}

export default App;
