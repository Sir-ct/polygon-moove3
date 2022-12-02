import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Nav from '../components/nav'
import MapView from 'react-native-maps'
import {Marker} from 'react-native-maps'
import { useState } from "react";
let {heigth, width} = Dimensions

function Transportclassbtn(props){
   
    return(
        <TouchableOpacity style={props.selectedBtn === props.type ? styles.selectedbtn : styles.classbtn} onPress={()=>{props.onclick(props.type)}}>
            <Text style={props.selectedBtn === props.type ? styles.selectedtext : styles.classtext}>{props.type}</Text>
        </TouchableOpacity>
    )
}

function Destination(){
    let [selectedBtn, setSelectedBtn] = useState("")
    function setSelectedClass(type){
        setSelectedBtn(type)
    }
    
    return(
       <SafeAreaView style={styles.destinationpage}>
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
         <View style={styles.enterdestination}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
                8 Drivers Nearby
            </Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>1-3 min</Text>
            <TextInput style={styles.destinationinput} placeholderTextColor='#5555ee' placeholder="Where to " />
            <View style={styles.btncontainer}>
                <Transportclassbtn  type="Economy" onclick={setSelectedClass} selectedBtn = {selectedBtn} />
                <Transportclassbtn  type="Comfort" onclick={setSelectedClass}  selectedBtn = {selectedBtn} />
                <Transportclassbtn  type="Business" onclick={setSelectedClass}  selectedBtn = {selectedBtn} />
            </View>
        </View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    destinationpage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    enterdestination: {
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',
        backgroundColor: '#000011'
    },
    destinationinput: {
        height: 40,
        marginVertical: 30,
        color: 'grey',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        fontSize: 20
    },
    btncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30
    },
    classtext:{
        color: 'grey'
    },
    classbtn: {
        padding: 10
    },
    selectedtext: {
        color: 'white'
    },
    selectedbtn: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'white'
    }
})
export default Destination