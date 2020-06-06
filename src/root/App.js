import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import product_list from './../screens/product_list/product_list'
import API from "../api/APIManager"

import styles from "./styles"

export default class App extends Component {

 render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}
        sceneStyle={styles.routerScene}
      >
        <Scene key="root" >
          <Stack key="product_list" hideNavBar>
            <Scene key="product_list" component={product_list} />
          </Stack>
        </Scene>
      </Router>
    )
  }
}