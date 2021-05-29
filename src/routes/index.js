import React, { useEffect } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { BackHandler } from "react-native"

import Dashboard from '../screens/Dashboard'


const Routes = props => {

    const onBackPress = () => {
        // Do Whatever you want to do on back button click
        // Return true to stop default back navigaton
        BackHandler.exitApp();
        // Return false to keep default back navigaton
        return true;
      };
  
      BackHandler.addEventListener(
        'hardwareBackPress', onBackPress
      );


    return (
        <Router backAndroidHandler={onBackPress}>
            <Scene key='root'>

                <Scene key='dashboard' component={Dashboard} hideNavBar />

            </Scene>
        </Router>
    );
}

export default Routes;
