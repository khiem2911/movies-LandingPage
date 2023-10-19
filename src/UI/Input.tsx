import classes from "./Input.module.css";
import input from "../model/input";
import React,{useRef} from 'react'


const Input:React.FC<input> = (props) => {

  const inputRef = useRef<HTMLInputElement>(null)

 

  const onHandlerKeyPress = ()=>{
    props.onSubmit(inputRef.current!.value)
  }

  return (
   
      <input onChange={onHandlerKeyPress} className={classes.input} ref={inputRef} placeholder="Search..." />
    
  );
};
export default Input;
