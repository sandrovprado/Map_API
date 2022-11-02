import React, { useEffect, useState } from 'react';
import { CssBaseline,Grid } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [places,setPlaces] = useState([]);
    const [childClicked,setChildClicked] = useState(null);
    
    const [coordinates,setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});

    const [isLoading, setisLoading] = useState(false);

    useEffect(()=>{ 
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{ //get users locatiton 
            setCoordinates({lat:latitude, lng:longitude});
        })
    },[])

    useEffect(() =>{
        setisLoading(true); 

        getPlacesData(bounds.sw, bounds.ne)
            .then((data)=>{   
                setPlaces(data);
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
                <Grid item xs={12} md={4}>  
                    <List  
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                    />

                </Grid>  
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>  
            </Grid>
            </>
        </div>
    );
}

export default App;