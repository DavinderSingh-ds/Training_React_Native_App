// Now using REDUCER : Reducer is a function that Manages Changes of an object

import React,{useReducer} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

// VERY imp., using this variable by default color become +15 or -15
const COLOR_INCREMENT = 15;

// action  work is howToChangeStateObject inreasing red or decreasing etc. 
const reducer = (state,action) => {
    // state === {red:number,green:number,blue:number}
    // action === {colorToChange: 'red' || green || blue ,amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            //rebuild entire state object if we want to change
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };        
        default:
            return state;
    }

};

const SquareScreen = () => {

    const [state,dispatch] = useReducer(reducer,{red:0 , green: 0, blue: 0});

    // console.log(state); // all objects stored in the state variable red:0,green:0,blue:0

    return (
        <View>
            {/* here color is a variable not a style ,it is used for props */}
            <ColorCounter 
                colorName="Red" 
                onIncrease={()=> }
                onDecrease={()=> }
                
                />
            <ColorCounter 
                colorName="Blue" 
                onIncrease={()=> }
                onDecrease={()=> }
                />
            <ColorCounter 
                colorName="Green"
                onIncrease={()=> }
                onDecrease={()=> }
                />
    {/* Here The Container of Color will Shows up  on pressing Button Click increase or decrease*/}
            <View 
                style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${red},${green},${blue})`,
                }}
                />    
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;




// All is WITHOUT REDUCER 

// With useState


// import React,{useState} from 'react';
// import {View,Text,StyleSheet} from 'react-native';
// import ColorCounter from '../components/ColorCounter';

// // VERY imp., using this variable by default color become +15 or -15
// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//     const [red,setRed] = useState(0);
//     const [green,setGreen] = useState(0);
//     const [blue,setBlue] = useState(0);

//     const setColor = (color,change) => {
//         //color === 'red','green','blue'
//         // change === +15 ,-15
//         switch(color){
//             case 'red':
//                 red+change >255 || red+change < 0 
//                     ? null 
//                     : setRed(red+change);
//                 return;
//             case 'green':
//                 green+change >255 || green+change < 0 
//                     ? null 
//                     : setGreen(green+change);
//                 return;
//             case 'blue':
//                 blue+change >255 || blue+change < 0 
//                     ? null 
//                     : setBlue(blue+change);
//                 return;        
//             default:
//                 return;
//         }
//     }

//     return (
//         <View>
//             {/* here color is a variable not a style ,it is used for props */}
//             <ColorCounter 
//                 colorName="Red" 
//                 onIncrease={()=> {setColor('red',COLOR_INCREMENT)}}
//                 onDecrease={()=> {setColor('red',-1 * COLOR_INCREMENT)}}
                
//                 />
//             <ColorCounter 
//                 colorName="Blue" 
//                 onIncrease={()=> {setColor('blue',COLOR_INCREMENT)}}
//                 onDecrease={()=> {setColor('blue',-1 * COLOR_INCREMENT)}}
//                 />
//             <ColorCounter 
//                 colorName="Green"
//                 onIncrease={()=> {setColor('green',COLOR_INCREMENT)}}
//                 onDecrease={()=> {setColor('green',-1 * COLOR_INCREMENT)}}
//                 />
//     {/* Here The Container of Color will Shows up  on pressing Button Click increase or decrease*/}
//             <View 
//                 style={{
//                     height:150,
//                     width:150,
//                     backgroundColor:`rgb(${red},${green},${blue})`,
//                 }}
//                 />    
//         </View>
//     );
// }

// const styles = StyleSheet.create({});

// export default SquareScreen;

