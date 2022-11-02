import React, {useState, useEffect, createRef} from "react";
import { CircularProgress,Grid,InputLabel,MenuItem,FormControl,Select,Typography } from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from './styles';


const List = ({places,childClicked,isLoading}) => {
    const classes = useStyles();
    const [rating, setRating] = useState('');
    const [RefElement,setRefElement] = useState([]);

    
    useEffect(() =>{
        const refs = Array(places?.length).fill().map((_,i) => RefElement[i] || createRef());

        setRefElement(refs);
    },[places]);
        //1:35:00 js mastery api
         //recall useEffect everytime places change

    return(
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
            {isLoading?(
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ) : (
                <>
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
                    <Grid ref={RefElement[i]} item key={i} xs={12}>
                    <PlaceDetails 
                        place={place} 
                        selected={Number(childClicked) === i}
                        refProp={RefElement[i]}
                    />
                </Grid>
                ))}    
            </Grid>
                </>
            )}
        </div>
    );
}

export default List;