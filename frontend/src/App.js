import { useState } from "react";
import axios from "axios"
import Form from "./components/Form";
import Number from "./components/Number";
import Numbers from "./components/Numbers";
import './App.css';

function App() {
  const [num, setNum] = useState()
  const [isMultipleNumbers, setMultipleNumbers] = useState(false);
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false)
  const[enteredNumbers, setEnteredNumbers] = useState()
  
  const handleChange = e =>{
      setNum(e.target.value)
      if(num.includes(',')) {
          setMultipleNumbers(true)
      } else {
          setMultipleNumbers(false)
      }
      setShowResult(false);
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      let url;
      let response;
      if(isMultipleNumbers) {
          url = "http://localhost:5001/myapi/numbers/"+num
          response = await axios.get(url)

      } else {
          url = "http://localhost:5001/myapi/number/"+num
          response = await axios.get(url)
          
      } 
      console.log(response.data)
      setResult(response.data)
      setShowResult(true)
      setEnteredNumbers(num)
      setNum("")
    }
  return (
    <div className="App">
      
      <h3>
          Prime Number Checker
      </h3>
      <p>Enter an integer or 1 to n integers. Use comma to separate integers</p>
      <Form num={num} handleChange={handleChange} handleSubmit={handleSubmit} />

{(() => {
            if (!showResult) {
              return (
                <p></p>
              )
            }  else {
                if(isMultipleNumbers) {
                return (
                    <div>
                        <p>Entered numbers: {enteredNumbers}</p>
                        <Numbers res={result} />
                    </div>   
                )
                } else{
                    return(
                        <div>
                            <p>Entered number: {enteredNumbers}</p>
                            <Number res={result} />   
                    </div>
                    )
                }
            }
        })()}
    </div>
  );
}

export default App;
