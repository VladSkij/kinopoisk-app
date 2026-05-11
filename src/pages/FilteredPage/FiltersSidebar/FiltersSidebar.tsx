import {useGetGenresQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import s from "./FiltersSidebar.module.css"
import {SortSelect} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/SortSelect.tsx";
import {RatingSlider} from "@/pages/FilteredPage/FiltersSidebar/RatingSlider/RatingSlider.tsx";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";

type Props = {
    onSortChange: (sort:SortCategoryValues)=>void;
    onRatingChange: (rating:number[]) => void;
    sortValue:SortCategoryValues;
    onGenreChange:(genreId:number) => void;
    genresId:number[];
    onResetFilters:() => void;
}

export const FiltersSidebar = ({onSortChange, sortValue, onRatingChange, onGenreChange, genresId, onResetFilters}:Props) => {
    const {data, } = useGetGenresQuery()

    return (
        <div className={s.container}>
            <SortSelect  onSortChange={onSortChange} sortValue={sortValue}/>
            <RatingSlider onRatingChange={onRatingChange}/>
            <ul className={s.filtersSidebarList}>
                {data?.genres.map((genre) => (
                    <li key={genre.id}><Button children={genre.name} onClick={()=>onGenreChange(genre.id)} isActive={genresId.includes(genre.id)}/></li>
                ))}
            </ul>
            <Button children={"Reset filters"} onClick={onResetFilters}/>
        </div>
    );
};
