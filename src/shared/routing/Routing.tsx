import {Path} from "@/shared/routing/paths.ts"
import {Routes, Route} from "react-router-dom";

export const Routing = ()=>{
    return(
      <Routes>
          <Route path={Path.Main} element={<div>Main</div>}/>
          <Route path={Path.CategoryMovies} element={<div>Category</div>}/>
          <Route path={Path.FilteredMovies} element={<div>Filtred</div>}/>
          <Route path={Path.Search} element={<div>Search</div>}/>
          <Route path={Path.Favorites} element={<div>Favorite</div>}/>
          <Route path={Path.Movie} element={<div>Move</div>}/>
          <Route path={Path.NotFound} element={<div>404</div>}/>
      </Routes>
    )
}