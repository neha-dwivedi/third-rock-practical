import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
       flex:1,
        backgroundColor:"#DCDCDC",
      },
    header_view: {
      flex:0.08,justifyContent:'center',backgroundColor:'#228B22'
    },
    header_text: {
      fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center',
      borderBottomColor: 'rgba(234,66,26,1)'
    },
    space:{
      height: 25, width: 25
    },
    card:{
      flexDirection:'row',backgroundColor:'white',borderWidth:0,height:80,borderRadius:5, margin:10
    },
    middle_view : {
      flexDirection:'column',left:30,top:18,flex:0.5,
    },
   swipe_design: {
    flex:0.3,
    left:20,
    borderWidth:0,
    justifyContent:'center',
    alignItems:'center',
    marginRight:-70,
    backgroundColor: '#228B22',
    color:'white'
   }
   
});
export default styles;
