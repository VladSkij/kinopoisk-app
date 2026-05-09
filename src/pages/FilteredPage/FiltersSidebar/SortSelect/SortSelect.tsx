import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


export const SortSelect = () => {
    return (

        <FormControl fullWidth>
            <InputLabel id="sortSelect">Sort by</InputLabel>
            <Select
                labelId="sortSelect"
                value={"popularity.desc"}
                label="Sort by"
                // onChange={handleChange}
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
