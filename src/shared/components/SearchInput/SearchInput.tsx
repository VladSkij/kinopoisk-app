import s from './SearchInput.module.css';
import {useState} from "react";

type Props={
    onSearch: (value:string) => void;
}

export const SearchInput = ({onSearch}:Props) => {

    const [inputValue, setInputValue]= useState('');

    const submitHandler = (inputValue:string)=>{
        onSearch(inputValue);
    }


    return (
        <div>
            <form className={s.form} onSubmit={(e)=>{e.preventDefault(); submitHandler(inputValue)}}>
                <input className={s.input} placeholder='Search for a movie' onChange={(e)=>setInputValue(e.target.value)} />
                <button className={s.btn} type="submit" disabled={!inputValue.trim()}>Search</button>
            </form>
        </div>
    );
};

