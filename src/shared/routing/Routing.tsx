import {Path} from "@/shared/routing/paths.ts"
import {Routes, Route} from "react-router-dom";
import {MainPage} from "@/pages/MainPage.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage.tsx";
import {CategoriesPage} from "@/pages/CategoryPage"
import {FiltredPage} from "@/pages/FiltredPage.tsx";
import {SearchPage} from "@/pages/SearchPage.tsx";
import {FavoritesPage} from "@/pages/FavoritesPage.tsx";


export const Routing = ()=>{
    return(
      <Routes>
          <Route path={Path.Main} element={<MainPage />} />
          <Route path={Path.CategoryMovies} element={<CategoriesPage />} />
          <Route path={Path.FilteredMovies} element={<FiltredPage />} />
          <Route path={Path.Search} element={<SearchPage />} />
          <Route path={Path.Favorites} element={<FavoritesPage />} />
          <Route path={Path.NotFound} element={<NotFoundPage />} />
      </Routes>
    )
}