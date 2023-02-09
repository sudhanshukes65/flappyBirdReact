import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';


function App() {

  const [birdpos,setBirdpos] = useState(300);
  let birdval;
  useEffect(()=>{
    if(birdpos<600 - 25){
      birdval = setInterval(() => {
        setBirdpos((birdpos) => birdpos+5);
      }, 25);
    }
    return ()=>clearInterval(birdval);
    
  });
  const clickhandler=()=>{
    if(birdpos<25)setBirdpos(0);
    else setBirdpos((birdpos)=>birdpos-60);
  }
  // const spacehander=(event)=>{
  //   if(event.key === 'a'){
  //     setBirdpos((birdpos)=>birdpos-60);
  //   }
  //   else  setBirdpos((birdpos)=>birdpos);
  // }
  return (
  <Home onClick={clickhandler}>
    <Background>
      <Bird top = {birdpos} />
    </Background>
  </Home>
  );
  
}

export default App;

const Home = styled.div`
  height : 100vh;
  display : flex;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div `
  background-image: url("./images/background-Day.png");
  background-repeat: no-repeat;
  background-size: 400px 600px;
  width: 400px;
  height: 600px;
  border: 2px solid black;
  position: relative;
`;
const Bird = styled.div `
  background-image: url("./images/bd-nobg.png");
  position: absolute;
  background-repeat: no-repeat;
  /* background-color: blue; */
  background-size: 30px 25px;
  width: 30px;
  height: 25px;
  top: ${(props)=> props.top}px;
  left: 100px;
`;