import React ,{useState} from 'react'
import Counter from './counter';

 function Home(){
    const [count,setCount] = useState(0);
    const handleIncrement= ()=> setCount(count+1);
    const handleDecrement = ()=> setCount(count > 0 ? count-1 : 0 );
    const handleReset = ()=> setCount(0);
    return(
         <div className="state-contents">
            <Counter
              count={count} 
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onReset={handleReset}
            />
         </div>
    );
}
export default Home;
