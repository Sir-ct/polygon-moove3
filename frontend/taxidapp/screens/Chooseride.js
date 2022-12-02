import { Text, SafeAreaView, StyleSheet, View, ScrollView, Image, FlatList, TouchableOpacity } from "react-native"
import MapView from "react-native-maps"
import { Marker } from "react-native-maps"
import Nav from '../components/nav'
import Cardetailscard from "../components/Cardetailscard"
import Ionicons from '@expo/vector-icons/Ionicons';

function Chooseride(){

    let cardata = [
        {name: "care name"},
        {name: "car name"},
        {name: 'another car name'},
        {name: 'car name'}
    ]
   
    return(
        <SafeAreaView style={styles.chooseridepage}>
        <Nav />
        <View style={styles.showlocation}>
           <View style={{flexDirection: 'row', justifyContent: "center", borderBottomWidth: 2, borderBottomColor: 'white'}}>
                <Text style={{color: 'white', fontSize: 20}}>1298 La praya St, San francisco </Text>
                <TouchableOpacity>
                    <Ionicons name="copy-outline" color={'blue'} size={30} />
                </TouchableOpacity>
           </View>
        </View>
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
            <View style={styles.choosecar}>
                <FlatList 
                    horizontal
                    data={cardata}
                    renderItem = {({item})=> (<Cardetailscard />)}
                />
            </View>
        
       </SafeAreaView>
   
    )
}

let styles = StyleSheet.create({
    choosecar: {
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',
        backgroundColor: '#000011'
    },
    showlocation: {
        position: 'absolute',
        padding: 20,
        width: '100%',
        top: 100,
        backgroundColor: '#000011',
        zIndex: 10
    }
})

export default Chooseride