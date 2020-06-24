import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import JuniperText from "../components/JuniperText";
import styles from "../components/JuniperTextStyles";


const RulesScreen = ({ navigation }) =>{

    return(
        <JuniperText>
            <Text style={styles.title1}>
                Règles du jeu{'\n'}Juniper Green
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Retour à l'accueil</Text>
            </TouchableOpacity>
            <Text style={styles.paragraph}>Le jeu possède trois règles :</Text>
            <Text style={styles.paragraph}>Le Joueur 1 choisit un nombre entre 1 et 100.{'\n'}
                À tour de rôle, chaque joueur doit choisir un nombre parmi
                les multiples ou les diviseurs du nombre choisi précédemment
                par son adversaire et inférieur à 100.
            </Text>
            <Text style={styles.paragraph}>Un nombre ne peut être joué qu'une seule fois.</Text>
            <Text style={styles.paragraph}>Le perdant étant le joueur qui ne trouve plus de multiples
                ou de diviseurs communs au nombre précédemment choisi.</Text>
        </JuniperText>
    )

};

export default RulesScreen