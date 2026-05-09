import {useGetGenresQuery} from "@/features/movies/moviesApi/moviesApi.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import s from "./FiltersSidebar.module.css"
import {SortSelect} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/SortSelect.tsx";


export const FiltersSidebar = () => {
    const {data, } = useGetGenresQuery()
    return (
        <div>
            <SortSelect/>
            <ul className={s.filtersSidebarList}>
                {data?.genres.map((genre) => (
                    <li key={genre.id}><Button children={genre.name}/></li>
                ))}
            </ul>
            <button className={s.btn} type="submit">Reset filters</button>
        </div>
    );
};
