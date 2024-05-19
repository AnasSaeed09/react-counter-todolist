import styled from 'styled-components';
import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';

export default function Counter({ count, onIncrement, onDecrement , onReset }) {
  return (
    <Wrapper>
    <div className="counter-info">
      <div className='info-4tobtn'>
      <button className="plus-btn" onClick={onIncrement}>
        <BiPlusMedical />
      </button>
      <h1>{count}</h1>
      <button className="minus-btn" onClick={onDecrement}>
        <FaMinus/>
      </button>
      </div>
       <div className='single-reset-btn'>
       <button className="reset-btn" onClick={onReset}>Reset</button>
       </div>
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
 .counter-info{
  
    background-color:black;
    color:red;
   padding:150px 0px ;
   margin: 150px;
   overflow:hidden;
   border:2px solid crimson;
   border-radius:100px;
 }
 .info-4tobtn{
  display:flex;
  justify-content:center;
  align-items:center;
 }
   .plus-btn{
       background-color:red;
       border:4px solid blue;
       border-radius:25px;
       padding:10px 30px;
       margin-right:10px
   }
   h1{
    font-size:40px;
    font-weight:bolder;
   }
   .minus-btn{
    background-color:red;
    border:4px solid blue;
    border-radius:25px;
    padding:10px 30px;
    margin-left:10px
   }
   button:active{
    color:white;
   }
   button:hover{
    background-color:green;
   }
.single-reset-btn{
  text-align:center;
}
.reset-btn{
  background-color:crimson;
  border:4px solid blue;
  border-radius:25px;
  padding:10px 30px;
  font-size:18px;
  font-weight:bolder;
}

`;


