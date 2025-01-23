import './App.css'
import { Button,TextField } from '@mui/material'
import {useState} from 'react'

function App() {
  const [principle,setPrinciple] =useState("")
  const [rate,setRate]= useState("")
  const [year,setYear]= useState("")
  const [isPrinciple,setIsPrinciple] =useState(true)
  const [isRate,setIsRate] =useState(true)
  const [isYear,setIsYear] =useState(true)
  const [interest,setInterest]=useState(0)

  


  const validate=(e)=>{
    // console.log(e.target);
    const {name,value}=e.target
    console.log(name);
    console.log(value);
    
    // match(regexp) 
    // predefined method to check the similarity between the strings.
    // //return array when values matches with regular expressions
    // else return null
    // (^[0-9]$)
    // console.log(!!value.match(`^[0-9]*$`));
    
    if(!!value.match(`^[0-9]*$`)){
      if(name =="principle"){
        setPrinciple(value)
        setIsPrinciple(true)        
      }
      else if(name =="rate"){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }else{
      if(name == "principle"){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name =="rate"){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
    

    
  }
  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  const calculate=()=>{
    setInterest((principle*rate*year)/100)
  }
  
  

  return (
    <>
    <div className='bg-dark d-flex justify-content-center align item-center' style={{width:"100%",height:"100vh" }}>
      <div className="bg-light p-5 rounded-2 m-5">
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>
        <div className='bg-warning p-3 mt-4 d-flex rounded flex-column text-center'>
          <h1 className='mt-3'>{interest}</h1>
          <p>Total simple interest</p>
        </div>
        <div className='my-3'>
          <TextField value={principle} onChange={(e)=>validate(e)}  name='principle' id="filled-basic" label="Principle Amount" variant="filled" className='w-100' />
          {isPrinciple ==false &&  <p className='text-danger'>Invalid input</p>}
        </div>
        <div className='mb-3'>
          <TextField value={rate} onChange={(e)=>validate(e)}  name='rate' id="filled-basic" label="Rate of Interest(%)" variant="filled" className='w-100'/>
         {isRate==false && <p className='text-danger'>Invalid input</p>}
        </div>
        <div className='mb-3'>
          <TextField value={year} onChange={(e)=>validate(e)} name='year' id="filled-basic" label="Year" variant="filled" className='w-100' />
          {isYear == false &&<p className='text-danger'>Invalid input</p>}
        </div>
        <div className='mb-3 d-flex justify-content-around p-3'>
        <Button disabled={isPrinciple && isRate && isYear?false:true} onClick={calculate} variant="contained" color='success' size="large">Calculate</Button>
        <Button onClick={handleReset} variant="outlined" color='success' size="large">Reset</Button> 
        </div>
        

      </div>
    </div>  
    </>
  )
}

export default App
