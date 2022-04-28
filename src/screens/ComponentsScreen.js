import React from 'react';
import {Text , StyleSheet,View,Button} from 'react-native';

const ComponentsScreen = () => {
  // const greeting = <Text>Hi I Am Davinder Singh</Text>
  const name = 'Davinder Singh';
    return (
      <View>
      <Text styles={styles.textStyle}>This is App Screen</Text>
      {/* {greeting} */}
      <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
      {/* <Button
           title="Go to HomeScreen"
            onPress={() =>
            navigation.navigate('Home', { name: 'Davinder' })
             }
        /> */}
      </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:60,
        color:'red'
       
    },
    subHeaderStyle:{
      fontSize:20,
      color:'red'
    }
});

export default ComponentsScreen;