import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import MapView, {Marker} from "react-native-maps";
import Ionicons from '@expo/vector-icons/Ionicons'
import Nav from '../components/nav'

function Driverdetailscard(){
    return(
        <View style={styles.driverdetailscard}>
        <View style={
            {width: 50, 
            height: 50, 
            backgroundColor: '#33335f', 
            borderRadius: 50, 
            alignItems: 'center',
             justifyContent: 'center', 
             alignSelf: 'center',
             margin: 10
             }}>
            <Ionicons name="person" color={'white'} />
        </View>
        <Text style={{color: 'white', textAlign: "center"}}>Value</Text>
        <Text style={{color: 'white', textAlign: 'center'}}>detail type</Text>
    </View>
    )
}

function Orderpage(){
    return(
        <SafeAreaView>
              <Nav />
            <MapView style={{width: '100%', height: '100%', backgroundColor: 'green'}} region={{
                    latitude: 6.8666,
                    longitude: 7.4115,
                    latitudeDelta: 0.0068,
                    longitudeDelta: 0.0041
                }}  
                >
                    <Marker draggable
                        coordinate={{latitude: 6.8666, longitude: 7.4115}}
                       
                    />
                </MapView>
                <View style={styles.ridedetails}>
                    <Image style={{ position: 'absolute', top: -70, width: '100%', height: 120, resizeMode: 'cover'}} source={require("../assets/images/BMW-7-Series.png")}/> 
                    <View>
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>BMW 7 series</Text>
                        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>$6.5  |  1-3 mins</Text>
                    </View>

                    <View style={styles.driverdetailswrap}>
                       <Driverdetailscard  />
                       <Driverdetailscard />
                       <Driverdetailscard />
                    </View>

                    <View style={{paddingVertical: 30}}>
                        <View style={styles.journeydetails}>
                            <View>
                                <Text style={{color: 'white'}}>pick up</Text>
                                <Text style={styles.journeylocation}> 123 Pick up location </Text>
                            </View>
                            <Text style={styles.journeytime}>1-3 mins</Text>
                        </View>

                        <View style={styles.journeydetails}>
                            <View>
                                <Text style={{color: 'white'}}>Drop off</Text>
                                <Text style={styles.journeylocation}>456 Dropoff locate</Text>
                            </View>
                            <Text style={styles.journeytime}> 10:25 AM</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.orderbtn}>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Order a taxi</Text>
                    </TouchableOpacity>

                </View>
         
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    ridedetails: {
        position: 'absolute',
        paddingTop: 70,
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#33335f',
    },
    driverdetailswrap:{
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-evenly'
    },
    driverdetailscard: {
       width: 100,
       height: 150,
       padding: 10,
       borderRadius: 10,
       backgroundColor: '#000011'
    },
    journeydetails: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 10
    },
    journeylocation: {
        color: 'white',
        fontSize: 17
    },
    journeytime: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },
    orderbtn:{
        backgroundColor: '#3333ff',
        width: '70%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    }
})

export default Orderpage