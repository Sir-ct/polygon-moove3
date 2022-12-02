import { Text, SafeAreaView, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function driversignupform(props){
    return(
      <View>
        <View style={styles.loginform}>
    
            <View>
                <Text style={{color: 'white'}}>name</Text>
                <TextInput style={styles.textinputstyle} />
            </View>

            <View>
                <Text style={{color: 'white'}}>email</Text>
                <TextInput style={styles.textinputstyle} />
            </View>

            <View>
                <Text style={{color: 'white'}}>phone number</Text>
                <TextInput keyboardType={'phone-pad'} style={styles.textinputstyle}/>
            </View>

            <View>
                <Text style={{color: 'white'}}>password</Text>
                <TextInput secureTextEntry={true} style={styles.textinputstyle}/>
            </View>

            <View>
                <Text style={{color: 'white'}}>vehicle name</Text>
                <TextInput style={styles.textinputstyle} />
            </View>

            <View>
                <Text style={{color: 'white'}}>vehicle number</Text>
                <TextInput style={styles.textinputstyle} />
            </View>

            <TouchableOpacity style={styles.loginbtn}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold'}}>Sign up</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{padding: 20,}}>
        <Text style={{color: '#eee', fontWeight: 'bold'}}>already have an account? {<TouchableOpacity onPress={()=>{props.onpress()}} ><Text style={{color: 'blue'}}>Login</Text></TouchableOpacity>}</Text>
        </View>
        </View>
    )
}

let styles = StyleSheet.create({
    regpage:{
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

export default driversignupform