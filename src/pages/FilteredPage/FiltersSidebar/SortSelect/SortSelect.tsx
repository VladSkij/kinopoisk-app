import {FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent} from "@mui/material";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import s from './SortSelect.module.css'

type Props = {
    onSortChange: (value: SortCategoryValues) => void;
    sortValue: SortCategoryValues;
}

export const SortSelect = ({onSortChange, sortValue}:Props) => {

    const handleChange = (event: SelectChangeEvent) =>{
        onSortChange(event.target.value as SortCategoryValues);
    }

    return (

        <FormControl fullWidth>
            <InputLabel id="sortSelect">Sort by</InputLabel>
            <Select
                labelId="sortSelect"
                value={sortValue}
                label="Sort by"
                onChange={handleChange}
            >
                <MenuItem value={"popularity.desc"}><div className={s.selectItem}>Popularity <ArrowDownwardIcon fontSize={"small"}/></div></MenuItem>
                <MenuItem value={"popularity.asc"}><div className={s.selectItem}>Popularity <ArrowUpwardIcon fontSize={"small"}/></div></MenuItem>
                <MenuItem value={"revenue.desc"}><div className={s.selectItem}>Rating <ArrowDownwardIcon fontSize={"small"}/></div></MenuItem>
                <MenuItem value={"revenue.asc"}><div className={s.selectItem}>Rating <ArrowUpwardIcon fontSize={"small"}/></div></MenuItem>
                <MenuItem value={"primary_release_date.desc"}><div className={s.selectItem}>ReleaseDataDown <ArrowDownwardIcon fontSize={"small"}/></div></MenuItem>
                <MenuItem value={"primary_release_date.asc"}><div className={s.selectItem}>ReleaseData <ArrowUpwardIcon fontSize={"small"}/></div></MenuItem>
                <MenuItem value={"original_title.asc"}>Title: A-Z</MenuItem>
                <MenuItem value={"original_title.desc"}>Title: Z-A</MenuItem>
            </Select>
        </FormControl>
    )
};
