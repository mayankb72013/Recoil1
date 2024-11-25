import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { CounterValue } from "./store/atoms/atom"

function App(){
    return(
        <>
           <RecoilRoot>
              <Counter></Counter>
              <Increase></Increase>
              <Decrease></Decrease>
           </RecoilRoot>
        </>
    )
}
function Counter(){
    const count = useRecoilValue(CounterValue);
    return <div>{count}</div>
}
function Increase(){
    const setCount = useSetRecoilState(CounterValue);
    
    function inc(){
        setCount(c=>c+1);
    }

    return(
        <button onClick={inc}>Increase</button>
    )
}
function Decrease(){
   const setCount = useSetRecoilState(CounterValue);
    
   function dec(){
       setCount(c=>c-1);
   }

   return(
       <button onClick={dec}>Decrease</button>
   )
}
export default App