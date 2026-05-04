import type {Movie} from "@/features/movies/moviesApi/moviesApi.types.ts";
import s from "./MovieCard.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {
    movie: Movie
}

export const MovieCard = ({ movie }: Props)=>{
    const { title, poster_path, vote_average } = movie
    const roundedRating = vote_average.toFixed(1)
    return (
        <div className={s.container}>
            <a className={s.card}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.img}/>
                <span className={s.average}>{roundedRating}</span>
                <button className={s.favoriteBtn}><FavoriteIcon fontSize='small'/></button>
            </a>
            <div className={s.title}>{title}</div>
        </div>
    )
}