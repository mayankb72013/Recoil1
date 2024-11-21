import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

//This is the most basic form of state management using Context API  but it causes many unwanted re-renders

const CounterContext = createContext();
function CounterContextProvider({children}){
   const [ count,setCount ] = useState(0);

   return (
     <CounterContext.Provider value={{
        count: count,
        setCount: setCount
     }}>
       {children}
      </CounterContext.Provider>
   )
}
function App(){
    return(
      <div>
           <CounterContextProvider>
                <Count></Count>
                <Increase></Increase>
                <Decrease></Decrease>
           </CounterContextProvider>
      </div>
    )
}
function Count(){
   const { count } = useContext(CounterContext);

   return(
      <div>{count}</div>
   )
}
function Increase(){
   const {setCount } = useContext(CounterContext);

   return(
      <button onClick={()=>setCount(c=>c+1)} >Increase</button>
   )
}
function Decrease(){
   const {setCount } = useContext(CounterContext);

   return(
      <button onClick={()=>setCount(c=>c-1)} >Decrease</button>
   )
}
// export default App