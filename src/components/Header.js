//Import libraries for making components

import React from 'react';
import {Text, View} from 'react-native';

//Make component
const Header = (props) =>{
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles ={
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        //shadowColor: '#000',
        //shadowOffset: {width: 0, height: 2},
        //shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative',
        height: 60,        
        backgroundColor: '#F8F8F8'
    }, 
    textStyle: {
        fontSize: 20
    }
};

//Make component available to other parts of app
export default Header;