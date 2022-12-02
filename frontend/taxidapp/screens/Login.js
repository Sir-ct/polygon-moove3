import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login({navigation}){

    function gotosignup(){
        navigation.navigate('Signup')
    }
    return(
        <SafeAreaView style={styles.loginpage}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 50, textAlign: 'center', paddingTop: 50, marginBottom: 100}}>Taxi!</Text>

            <Text style={{color: '#eee', letterSpacing: 2, textAlign: "center", fontSize: 20, marginBottom: 10}}>Welcome Back</Text>
            <View style={styles.loginform}>
            
                <View>
                    <Text style={{color: 'white'}}>email</Text>
                    <TextInput style={styles.textinputstyle} />
                </View>

                <View>
                <Text style={{color: 'white'}}>password</Text>
                <TextInput secureTextEntry={true} style={styles.textinputstyle}/>
                </View>
                <TouchableOpacity style={styles.loginbtn}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{padding: 20}}>
            <Text style={{color: '#eee', fontWeight: 'bold'}}>don't have an account? {<TouchableOpacity onPress={gotosignup}><Text style={{color: 'blue'}}>sign up</Text></TouchableOpacity>}</Text>
            </View>
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    loginpage:{
        flex: 1,
        backgroundColor: '#000011',
    },
    loginform: {
        backgroundColor: '#33335f',
        padding: 15,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10
    },
    textinputstyle: {
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 15
    },
    loginbtn: {
        width: '80%',
        backgroundColor: '#3333ff',
        padding: 10,
        alignSelf: "center",
        borderRadius: 10
    }
})
export default Login