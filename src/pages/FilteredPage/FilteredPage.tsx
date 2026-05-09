import {FilteredMovieList} from "@/features/movies/ui/FilteredMovieList/FilteredMovieList.tsx";
import {FiltersSidebar} from "@/pages/FilteredPage/FiltersSidebar/FiltersSidebar.tsx";


export const FilteredPage = () => {
    return (
        <>
            <aside>
                <FiltersSidebar/>
            </aside>
            <section>
                <FilteredMovieList/>
            </section>
        </>
    );
};

