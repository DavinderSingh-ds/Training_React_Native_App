import React from 'react';
import {Text , StyleSheet,View,FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name:'Friend #1',age:20},
        {name:'Friend #2',age:21},
        {name:'Friend #3',age:22},
        {name:'Friend #4',age:23},
        {name:'Friend #5',age:24},
        {name:'Friend #6',age:25},
        {name:'Friend #7',age:26},
        {name:'Friend #8',age:27},
        {name:'Friend #9',age:28},
    ];
    return (
        <View>
        <FlatList
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            keyExtractor={friends => friends.name}  
            data={friends}
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.name}</Text>
          }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        color:'black',
        marginVertical:20,
    }
});

export default ListScreen;