import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style ={buttonStyle}>
            <Text style={textStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1, //means expand to fill as much content as possible
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,

    }
}

export default Button;