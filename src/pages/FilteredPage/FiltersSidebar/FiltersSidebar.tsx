import {useGetGenresQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import s from "./FiltersSidebar.module.css"
import {SortSelect} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/SortSelect.tsx";
import {RatingSlider} from "@/pages/FilteredPage/FiltersSidebar/RatingSlider/RatingSlider.tsx";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";

type Props = {
    sortBy: SortCategoryValues;
}

export const FiltersSidebar = ({sortBy}:Props) => {
    const {data, } = useGetGenresQuery()
    const handler = (a:SortCategoryValues)=>{
        console.log(a)
    }
    return (
        <div className={s.container}>
            <SortSelect sortValue={sortBy} onSortChange={handler}/>
            <RatingSlider onRatingChange={() => {} }/>
            <ul className={s.filtersSidebarList}>
                {data?.genres.map((genre) => (
                    <li key={genre.id}><Button children={genre.name}/></li>
                ))}
            </ul>
            <button className={s.btn} type="submit">Reset filters</button>
        </div>
    );
};
