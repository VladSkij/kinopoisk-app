import {Button as MuiButton} from "@mui/material";

type Props = {
 children: string;
 onClick?: () => void;
}

export const Button = ({children, onClick}:Props) => {
    return (
           <MuiButton onClick={onClick}>{children}</MuiButton>
    );
};

