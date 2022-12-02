import { Image, StyleSheet, Text, View } from "react-native";

function nav(){
    return(
        <View style={styles.nav}>
            <Text style={{fontSize: 29}}>Taxi!</Text>
            <Image style={{height: 40, width: 40, resizeMode: 'contain'}} source={require("../assets/images/navham.png")} />
        </View>
    )
}
 
const styles = StyleSheet.create({
    nav: {
        width: "100%",
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        height: 50,
        position: 'absolute',
        top: 40,
        zIndex: 10
    }
})
export default nav