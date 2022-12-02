import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import Orderpage from "../screens/Orderpage"

function Cardetailscard(props){
    return(
    <TouchableOpacity style={styles.cardetailscard} onPress={()=>{props.onpress()}}>
        <View style={{width:'100%', height: '60%'}}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'cover' }} source={require("../assets/images/BMW-7-Series.png")} />
        </View>
        <View style={{position: "absolute", top: 10, left: 10}}>
            <Text style={{color: 'white'}}>business</Text>
        </View>
        <View>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>BMW 7 series</Text>
            <Text style={{color: 'white', textAlign: "center"}}>$6.5 | 1-3mins</Text>
        </View>
    </TouchableOpacity>
    )
}

let styles = StyleSheet.create({
    cardetailscard: {
        padding: 10,
        margin: 10,
        width: 200,
        height: 200,
        backgroundColor: '#33335f',
        borderRadius: 15
    }
})

export default Cardetailscard