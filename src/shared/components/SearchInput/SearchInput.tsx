import s from './SearchInput.module.css';
import {useState} from "react";
import * as React from "react";

type Props={
    onSearch: (value:string) => void;
}

export const SearchInput = ({onSearch}:Props) => {

    const [inputValue, setInputValue]= useState('');

    const submitHandler = (inputValue:string)=>{
        onSearch(inputValue);
    }

   const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
       setInputValue(value)
       if(value===''){
           onSearch('');
       }
   }


    return (
        <div>
            <form className={s.form} onSubmit={(e)=>{e.preventDefault(); submitHandler(inputValue)}}>
                <input type={"search"} className={s.input} placeholder='Search for a movie' onChange={changeHandler} />
                <button className={s.btn} type="submit" disabled={!inputValue.trim()}>Search</button>
            </form>
        </div>
    );
};

