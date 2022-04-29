import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    return (
        <View>
            {/* here color is a variabvle not a style used for props */}
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green" />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;