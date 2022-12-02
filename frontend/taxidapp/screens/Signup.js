import { useState } from "react"
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from "react-native"
import Driversignupform from "../components/driversignupform"
import Ridersignupform from "../components/ridersignupform"

function Signup({navigation}){
    let [accountType, setAccountType] = useState('')

    function gotologin(){
        navigation.navigate('Login')
    }
    return(
        <SafeAreaView style={styles.regpage}>
            <View style={styles.usertypetoggle}>
                <TouchableOpacity style={styles.usertype}>
                    <Text style={{color: '#eee'}}>Driver</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.usertype}>
                    <Text style={{color: '#eee'}}>User</Text>
                </TouchableOpacity>
            </View>

            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 50, textAlign: 'center', paddingTop: 50, marginBottom: 100}}>Taxi!</Text>

            <Text style={{color: '#eee', letterSpacing: 2, textAlign: "center", fontSize: 20, marginBottom: 10}}>Create A Driver's Account</Text>
        
            <Driversignupform onpress={gotologin} />

        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    regpage:{
        flex: 1,
        backgroundColor: '#000011',
    },
    usertypetoggle: {
        backgroundColor: 'white',
        position: 'absolute',
        width: '30%',
        top: 150,
        borderRadius: 20,
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: 'row'
    },
    usertype: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'green'
    }
})


export default Signup