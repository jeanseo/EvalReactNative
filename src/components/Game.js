import React from 'react';
import styles from "./JuniperTextStyles";
import {Text, TextInput, TouchableOpacity, View} from "react-native";

const Game = () => {

    return(
        <>
            <Text style={styles.title2}>
                C'est à vous !
            </Text>
            <Text style={styles.title2}>
                Computer : 97
            </Text>
            <View style={[{flexDirection:"row"},{alignItems: "center"},{justifyContent: 'center',}]}>
                <Text>Votre choix:</Text>
                <TextInput
                    keyboardType = 'number-pad'
                    //value={amount.toString()}
                    //onChangeText={value => dispatch(setAmount(value))}
                    style = {styles.textInput}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                //onPress={() => navigation.navigate('Home')}
            >
                <Text>Valider</Text>
            </TouchableOpacity>
            <View style={styles.choicesArray}>
                <View style={styles.choicesColumn}>
                    <Text>Vos choix:</Text>
                    <Text>22</Text>
                    <Text>2</Text>
                    <Text>1</Text>
                </View>
                <View style={styles.choicesColumn}>
                    <Text>Choix du computer :</Text>
                    <Text>11</Text>
                    <Text>10</Text>
                    <Text>17</Text>
                </View>
            </View>
        </>
    )


};

export default Game