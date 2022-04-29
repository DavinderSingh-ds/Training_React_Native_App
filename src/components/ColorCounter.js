import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const ColorCounter = ({ color }) => {
    return (
        <View>
            <Text>{color}</Text>
        {/* very important if we want to use color variable or argument in concatenation string so use by back To Character i.e. `` */}
            <Button title = {`Increase ${color}`}/>
            <Button title = {`Decrease ${color}`}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter;