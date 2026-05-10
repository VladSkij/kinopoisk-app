import { Slider} from "@mui/material";
import {useMemo, useState} from "react";
import { debounce } from "lodash";

type Props = {
    onRatingChange: (value: number[]) => void
}

export const RatingSlider = ({onRatingChange}:Props) => {

    const debouncedOnRatingChange = useMemo(()=>
        debounce(onRatingChange, 200),
        [onRatingChange]);
    const [rating, setReting] = useState<number[]>([0,10])
    const handleChange = (_event: Event, newValue: number | number[]) => {
        setReting(newValue as number[])
        debouncedOnRatingChange(newValue as number[])
    }

    return (
        <>
            <Slider
                sx={{
                    color: '#01b4e4',
                    '& .MuiSlider-thumb': {
                        background: 'linear-gradient(to right, #01b4e4, #90cea1)',
                        border: 'none',
                    },
                    '& .MuiSlider-track': {
                        background: 'linear-gradient(to right, #01b4e4, #90cea1)',
                        border: 'none',
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'var(--primary-blue)',
                    },
                }}
                value={rating}
                onChange={handleChange}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="auto"

            />
            <div>
                Rating {rating[0]} - {rating[1]}
            </div>
        </>
    )
}