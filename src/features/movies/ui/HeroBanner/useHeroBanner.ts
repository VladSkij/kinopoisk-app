import {useEffect, useState} from "react";
import type {Movie} from "@/features/movies/moviesApi/moviesApi.types.ts";


export const useHeroBanner = (data:Movie[]) => {
    const[index, setIndex] = useState(0);
    const banner = data[index]
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(Math.floor(Math.random() * data.length));
        }, 15000)
        return () => clearInterval(interval)
    }, [data])
    return {banner}
}


