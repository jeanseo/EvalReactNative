import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import JuniperText from "../components/JuniperText";
import styles from "../components/JuniperTextStyles";
import Game from "../components/Game";

const GameScreen = ({ navigation }) =>{

    return(
        <JuniperText>
            <View style={styles.topMenu}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Rules')}
                >
                    <Text>Règles du jeu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    //onPress={() => navigation.navigate('Home')}
                >
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
            <Game/>


        </JuniperText>
    )




};

export default GameScreen