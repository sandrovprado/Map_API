import React from 'react';
import { CssBaseline,Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
    return(
        <div>
            <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                {/* only list will show on mobile devices // max spaces is 12*/}
                <Grid item xs={12} md={4}>  
                    <List />
                </Grid>  
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>  
            </Grid>
            </>
        </div>
    );
}

export default App;