import {FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent} from "@mui/material";
import type {SortCategoryValues} from "@/pages/FilteredPage/FiltersSidebar/SortSelect/lib/types/types.ts";

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
                <MenuItem value={"popularity.desc"}>Popularity Down</MenuItem>
                <MenuItem value={"popularity.asc"}>PopularityTop</MenuItem>
                <MenuItem value={"revenue.asc"}>RatingTop</MenuItem>
                <MenuItem value={"revenue.desc"}>RatingDown</MenuItem>
                <MenuItem value={"primary_release_date.desc"}>ReleaseDataDown</MenuItem>
                <MenuItem value={"primary_release_date.asc"}>ReleaseDataTop</MenuItem>
                <MenuItem value={"original_title.asc"}>TitleA-Z</MenuItem>
                <MenuItem value={"original_title.desc"}>TitleZ-A</MenuItem>
            </Select>
        </FormControl>
    )
};
