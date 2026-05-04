import {Button as MuiButton} from "@mui/material";
import s from "./Button.module.css"

type Props = {
 children: string;
 onClick?: () => void;
}

export const Button = ({children, onClick}:Props) => {
    return (
           <MuiButton onClick={onClick} className={s.button}>{children}</MuiButton>
    );
};

