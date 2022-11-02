import React, {useState} from "react";
import { CircularProgress,Grid,Typopgrahy,InputLabel,MenuItem,FormControl,Select,Typography } from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from './styles';


const List = ({places}) => {
    const classes = useStyles();
    const [rating, setRating] = useState('');

    return(
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3 ⭐️'s</MenuItem>
                    <MenuItem value={4}>Above 4 ⭐️'s</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {/* "?." only if they're places*/}
                {places?.map((place,i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))} 
            
            </Grid>
        </div>
    );
}

export default List;