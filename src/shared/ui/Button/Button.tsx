import {Button as MuiButton} from "@mui/material";
import s from "./Button.module.css"

type Props = {
 children: string;
 onClick?: () => void;
 isActive?: boolean
}

export const Button = ({children, onClick, isActive}:Props) => {
    return (
           <MuiButton onClick={onClick} className={`${s.button} ${isActive ? s.active : ''}`}>{children}</MuiButton>
    );
};

