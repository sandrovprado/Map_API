import React from "react";
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) =>{
    const classes = useStyles();

    return(
        <Card elevation={6}> 
            <CardMedia
                style={{height:375}}
                //check to see if restaurant has image, if not use default image.
                image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                ))}
                 {place?.address &&(
                     <Typography gutterBottom variant="subtitle2" className={classes.subtitle}>
                        {place.address} <LocationOnIcon  />
                        </Typography>
                )} 
                {place?.phone &&(
                     <Typography gutterBottom variant="subtitle2" className={classes.spacing}>
                        {place.phone} <PhoneIcon />
                        </Typography>
                )} 
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions> 
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;