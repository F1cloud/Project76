import React, {Component} from "react";
import {View, Text} from "react-native"

export default class StarMapScreen extends Component{
    render(){
        return(
            <View style = {{
                flex:1,
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Text> Star Map </Text>
            </View>
        )
    }
}