import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import { useSelector} from "react-redux";

import JuniperText from "../components/JuniperText";
import styles from "../components/JuniperTextStyles";
import Choices from "../components/Choices";

const ScoreScreen = ({ navigation }) => {
    const {scores} = useSelector(state => state.score);
    //On récupère le dernier enregistreemnt du score
    const [score] = scores.slice(-1);

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
                    onPress={() => navigation.navigate('Game')}
                >
                    <Text>Rejouer</Text>
                </TouchableOpacity>
            </View>
            <Text>Game Juniper Green</Text>
            <Text>Le jeu est terminé, vous avez {score.won?'gagné' : 'perdu'} en {score.playerChoices.length + score.computerChoices.length} tours
            </Text>
            <Choices computerChoices={score.computerChoices} playerChoices={score.playerChoices}/>



        </JuniperText>
    )

};

export default ScoreScreen