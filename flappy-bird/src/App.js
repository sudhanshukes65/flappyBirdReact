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
  const [obj_height,setobj_height]= useState(300);
  const [obj_pos,setobj_pos] = useState(400)
  // const bottomObj =400 - 20 - obj_height;

  useEffect(()=>{
    let objval;
    if(obj_pos>=-100)
      {
      objval = setInterval(() => {
      setobj_pos((obj_pos)=>obj_pos-6);
    }, 24);
  }
  else{
    setobj_pos(400);
    setobj_height(Math.floor(Math.random()*400));
  }
  return ()=>clearInterval(objval);
  });
//  collision   
  useEffect(()=>{
    let topObj = birdpos>=0 && birdpos< obj_height;
    let botObj = birdpos<600 && birdpos>=  obj_height +80 ;
    if(obj_pos> 10 && obj_pos < 10+100 && (topObj || botObj) ){
      setBirdpos(300);
      setobj_pos(400);
      // setobj_pos(400)
    }
  });

  return (
  <Home onClick={clickhandler}>
    <Background>
      <Obj
        height ={obj_height}
        left = {obj_pos}
        top={0}
        deg ={180}
      />
      <Bird top = {birdpos} />
      <Obj
        height ={ 600 - obj_height - 100}
        left = {obj_pos}
        top={100}
        deg ={0}
      />
      
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
  overflow: hidden;
`;
const Bird = styled.div `
  background-image: url("./images/bd-nobg.png");
  position: absolute;
  background-color: yellow;
  background-repeat: no-repeat;
  background-size: 30px 25px;
  width: 30px;
  height: 25px;
  top: ${(props)=> props.top}px;
  left: 80px;
`;
const Obj = styled.div `
  position: relative;
  background-image: url("./images/pipeee.png");
  background-color: red;
  width: 80px;

  height: ${(props)=> props.height}px;
  left:${(props)=> props.left}px;
  background-size: 80px ${(props)=> props.height}px;
  /* background-repeat: no-repeat; */
  top: ${(props)=> props.top}px;
  transform: rotate(${(props)=> props.deg}deg);
`;
