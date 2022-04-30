import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const BoxScreen = () => {
    return (
        <View styles={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        color: 'black',
        // marginVertical: 20,
        // marginHorizontal: 20,
        margin: 20,
    }
});

export default BoxScreen;