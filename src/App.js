
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import { useState } from 'react';
import { Botao } from './Header/Button';
import Lua from './img/moon.png';
import Sol from './img/sun.png';
import LogoLight from './img/barbearia-logo.png';
import LogoDark from './img/barbearia-logo-white.png';



function App() {
 
  let confButtonL = [
    '#000' , '2px solid navy'
  ]
  let confButtonD = [
    '#fff' , '2px solid #fff'
  ]

  let [darkMode, setDarkMode] = useState('modo-claro');
  let [nameMode, setNameMode] = useState('Dark');
  let [imgMode, setImgMode] = useState(Lua);
  let [buttonMode, setButtonMode] = useState(confButtonL);
  let [logoMode, setLogoMode] = useState(LogoLight);


  const alterarEstilo = () => {

      if (darkMode === 'modo-claro'){
        setDarkMode('modo-escuro')
        setNameMode('Dark');
        setImgMode(Lua);
        setButtonMode(confButtonD);
        setLogoMode(LogoDark);
        
    
        
        
      }
      else {
        setDarkMode('modo-claro')
        setNameMode('Light');
        setImgMode(Sol);
        setButtonMode(confButtonL);
        setLogoMode(LogoLight);
       
      }

    
  }

  function handleClick(e) {
    e.preventDefault();
    alterarEstilo();

  }
  return (

    
    <div className="App">
   <div className={darkMode}>
    <Botao nome={nameMode} cor={buttonMode}imgButton={imgMode} event={handleClick}/>
        <Header logo={logoMode} />
        <Banner/>
        <Content/>
      
       
        </div>
    </div>
    
  );
}

export default App;
