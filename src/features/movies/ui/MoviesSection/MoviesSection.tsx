import {MovieList} from "@/features/movies/ui/MovieList/MovieList.tsx";
import type {MoveCategoryEndpoints} from "@/features/movies/ui/MovieList/lib/types/types.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import  s from "./MoviesSection.module.css"

type Props = {
    category: MoveCategoryEndpoints,
    categoryTitle: string;
    limit: number;
}


export const MoviesSection = ({category, categoryTitle, limit}:Props) => {
    const onClickFn = () =>{
        console.log("clicked");
    }
    return (
        <div className={s.container}>
            <div className={s.Header}>
                <h2 className={s.title}>{categoryTitle}</h2>
                <div className={s.btn}><Button onClick={onClickFn}>View more</Button></div>
            </div>
            <div className={s.listContainer}><MovieList category={category} limit={limit}/></div>
        </div>
    );
};

