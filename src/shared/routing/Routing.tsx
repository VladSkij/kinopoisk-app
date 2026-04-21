import {Path} from "@/shared/routing/paths.ts"

export const Routing = ()=>{
    return(
        <Routes>
            <Route path={Path.Main} element={<div>Main</div>} />
            <Route path={Path.CategoryMovies} element={<div>Category movies</div>} />
            <Route path={Path.FilteredMovies} element={<div>Filtered movies</div>} />
            <Route path={Path.Search} element={<div>Search</div>} />
            <Route path={Path.Favorites} element={<div>Favorites</div>} />
            <Route path={Path.Movie} element={<div>Movie page</div>} />
            <Route path={Path.NotFound} element={<div>404</div>} />
        </Routes>
    )
}