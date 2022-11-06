import React, { useEffect, useState } from 'react';
import { CssBaseline,Grid } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [places,setPlaces] = useState([]);
    const [childClicked,setChildClicked] = useState(null);
    const [ratingFilter,setRatingFilter] = useState([]);
    
    const [coordinates,setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});

    const [isLoading, setisLoading] = useState(false);
    const [rating, setRating] = useState('');

    useEffect(()=>{ 
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{ //get users locatiton 
            setCoordinates({lat:latitude, lng:longitude});
        })
    },[]); //this use effect starts when opening the app

    useEffect(() => {
        const ratingFilter = places.filter((place) => place.rating > rating);

        setRatingFilter(ratingFilter);
    },[rating]);

    useEffect(() =>{
        setisLoading(true); 

        getPlacesData(bounds.sw, bounds.ne)
            .then((data)=>{   
                setPlaces(data);
                setRatingFilter([]); //reset back to empty array
                setisLoading(false); //once data has been retrieved 
        })
    },[coordinates,bounds]); //useEffect will rerun everytime coords and bounds change to find new data 

    return(
        <div>
            <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                {/* only list will show on mobile devices // max spaces is 12*/}
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={ratingFilter.length ? ratingFilter : places} //if filtered places true, else render place
                        setChildClicked={setChildClicked}
                    />
                </Grid>  

                <Grid item xs={12} md={4}>  
                    <List  
                        places={ratingFilter.length ? ratingFilter : places} 
                        childClicked={childClicked}
                        isLoading={isLoading}
                        raing={rating}
                        setRating={setRating}
                    />

                </Grid>  
               
            </Grid>
            </>
        </div>
    );
}

export default App;