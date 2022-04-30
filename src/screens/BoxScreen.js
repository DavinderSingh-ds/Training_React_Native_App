import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View styles={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'flex-start',
        // alignItems: 'flex-end',
        // alignItems: 'center',
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red',
        color: 'black',
        // marginVertical: 20,
        // marginHorizontal: 20,
        margin: 20,
    }
});

export default BoxScreen;