import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

export default class Login extends Component{

    render(){
        return(
            <View style={styles.container}> 
                <Image
                style={{width: 120, height: 120,marginLeft:110,marginTop:110}}
                source={{uri: 'https://wildlifesafariadventures.com/wp-content/uploads/2017/01/cropped-wildlife-safari-adventures-lion-logo.png'}}
                />
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                onPress={() => this.props.navigation.navigate('BiodataScreen')} title="Biodata"
                title="Login"
                color="#808080"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})