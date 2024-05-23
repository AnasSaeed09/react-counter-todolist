import React ,{useState} from 'react'
import Counter from './counter';
import Header from '../Common/header';

 function Home(){
   //  useState: To store the date with a given state
    const [count,setCount] = useState(0);
    const handleIncrement= ()=> setCount(count+1); // Incrementing count
    const handleDecrement = ()=> setCount(count > 0 ? count-1 : 0 ); // Decrementing count if count > 0
    const handleReset = ()=> setCount(0); // Reseting count to 0
    return(
      <>
         <Header/>
         <div className="state-contents">
            <Counter
            // Sending data to counter.js using Prop method
              count={count} 
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onReset={handleReset}
            />
         </div>
         </>
    );
}
export default Home;
