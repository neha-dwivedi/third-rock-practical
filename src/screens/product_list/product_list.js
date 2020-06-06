//import react components here..
import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native'
import styles from "./styles"

//import external libraries here..
import API from "../../api/APIManager"
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import PDFView from 'react-native-view-pdf';

const { width, height } = Dimensions.get("window");
const baseURL = "https://www.monclergroup.com/wp-json/mobileApp/v1/getPressReleasesDocs" // DEV

export default class product_list extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProgress: false,
      product_list: [],
      myText: 'I\'m ready to get swiped!',
      gestureName: 'swipe',
    }
  }

  //lifecycle method of react native
  componentDidMount() {
    fetch(baseURL, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({product_list: responseJson.content})
      })  
    }

   //on swipe getsure 
    onSwipeRight(gestureState) {
      this.setState({myText: 'You swiped right!'});
    }
    
   //set the gesture direction
    onSwipe(gestureName, gestureState) {
      const { SWIPE_RIGHT} = swipeDirections;
      this.setState({gestureName: gestureName});
      switch (gestureName) {
         case SWIPE_RIGHT:
          this.setState({backgroundColor: 'yellow'});
          break;
      }
    }

 //open pdf on click
  pdfView(item){
    this.setState({showProgress:true})
    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={item.mediaUrl}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={() => console.log('Cannot render PDF', error)}
        />
      </View>
    );
 }

 //Design:- render design here..
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header_view}>
          <Text style={styles.header_text}>Product List
      </Text>
          <View style={styles.space}></View>
        </View>
        <FlatList
          style={{ flexGrow: 1, flex: 0.5 }}
          data={this.state.product_list}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => this.pdfView(item)}>
              <View style={styles.middle_view}>
                <Text> {item.mediaTitleCustom}</Text>
              </View>
              <GestureRecognizer 
              onSwipe={(direction, state) => this.onSwipe(direction, state)}
              onSwipeRight={(state) => this.onSwipeRight(state)}
              config={config}
              style={styles.swipe_design}
              >
              <Text style={{color:'white',fontWeight:'bold'}}> {this.state.gestureName}</Text>
            </GestureRecognizer>
            </TouchableOpacity>
           )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        {this.state.showProgress ? <View style={{
          height: height, width: width, position: 'absolute', justifyContent:
            'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'rgba(223, 99, 54, 0.5)'
        }}>
          <ActivityIndicator size='large' color='white' style={{ paddingTop: 30 }}></ActivityIndicator>
        </View> : null}
      </SafeAreaView>
    );
  }
}