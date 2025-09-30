import { createContext, useState } from "react";
import main from "../Config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setInput]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("")
    const [prevPrompt,setPrevprompt]=useState([])
    const [showResult,setShowresult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,setResultdata]=useState("")
     
  const onSent = async (prompt) => {
    setResultdata("")
    setLoading(true)
    setShowresult((prev)=>!prev)
   const response= await main(input);
   setResultdata(response)  
   setLoading(false)
   setInput("")
  };
  
  const constextValue = {
       prevPrompt,
       setPrevprompt,
       onSent,
       setRecentPrompt,
       recentPrompt,
       showResult,
       loading,
       resultData,
       input,
       setInput

  };
  return (
    <Context.Provider value={constextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
