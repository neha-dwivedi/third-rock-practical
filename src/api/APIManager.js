import React from 'react'
import {Alert} from 'react-native'
import NetInfo from "@react-native-community/netinfo";

const baseURL = "https://www.monclergroup.com/wp-json/mobileApp/v1/getPressReleasesDocs" // DEV

export default {

    // Default pageCount
   //this function is a main function for all api's it take 3 parameter and provide the response based on these params
    async fetchData() {
    //     console.log('--------',NetInfo.fetch())
    //     let isConnected = await NetInfo.isConnected
    //     NetInfo.fetch().then((response)=>{
    //         let isConnected = response.isConnected 
    //     })
    //     if (isConnected) {
    //         fetch(baseURL, {
    //             method: 'GET'
    //           })
    //             .then((response) => response.json())
    //             //If response is in json then in success
    //             .then((responseJson) => {
    //                 console.log('responseJson-------',responseJson)
    //                 return responseJson;
    //             })
    //     } 
    //     else {
    //         Alert.alert('Third Rock Techno','There are network issue')
    //     }
    // }
    }
}