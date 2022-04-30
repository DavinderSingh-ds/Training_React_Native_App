import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View styles={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        // alignItems: 'flex-start',
        flexDirection: 'column',
        height: 600,
        justifyContent: 'space-around',
        // flexDirection: 'row'
        // alignItems: 'flex-end',
        alignItems: 'center',
    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
        color: 'black',
        margin: 20,
        // marginVertical: 20,
        // marginHorizontal: 20,
        // flex:4
        
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'red',
        color: 'black',
        // margin: 20,
        // flex:4,
        alignSelf: 'flex-end',
    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'red',
        color: 'black',
        // margin: 20,
        // flex:2,
        alignSelf: 'stretch',
    }
});

export default BoxScreen;