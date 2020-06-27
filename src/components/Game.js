import React, {useEffect} from 'react';
import styles from "./JuniperTextStyles";
import {useDispatch, useStore, useSelector, } from "react-redux";
import {Text, TextInput, TouchableOpacity, View, FlatList, ActivityIndicator} from "react-native";
import {setPlayerChoice, submitChoice, hideMessage, initializeGame, computerPlays, endGame} from "../actions/actions-types";
import Colors from "../../Colors";
import Choices from "./Choices";

const Game = () => {
    const dispatch = useDispatch();
    const {computerTurn,playerChoice,playerChoices,computerChoice,computerChoices,displayError,errorMessage, gameOver} = useSelector(state => state.juniper);
    //Démarrage du jeu
    useEffect(()=>{dispatch(initializeGame())},[]);

    //Détection de l'affichage du message d'erreur
    useEffect(()=>{
        if(displayError)
            dispatch(hideMessage());
    },[displayError]);

    //Lancement du tour de jeu du computer
    useEffect(()=>{
        if(computerTurn)
            dispatch(computerPlays());
    },[computerTurn]);



    return(
        <View>
            {displayError &&
            <View style={styles.alertBox}>
                <Text style={{color:'white',fontWeight: 'bold',}}>{errorMessage}</Text>
            </View>}
            {gameOver && <Text style={styles.title2}>"Pas de choix possible"</Text>}
            {!gameOver && computerTurn && <View style={{flexDirection:'row', justifyContent:'space-evenly'}}><Text style={styles.title2}>Computer réfléchit...</Text><ActivityIndicator color={Colors.primary} /></View>}
            {!gameOver && !computerTurn && <Text style={styles.title2}>C'est à vous !</Text>}

            <Text style={styles.title2}>
                {computerChoices.length === 1 && playerChoices.length === 0? `Début du jeu: ${computerChoice}` :
                    !computerTurn? `Computer : ${computerChoice}`: `Vous avez choisi ${playerChoice}` }
            </Text>
            <View style={[{flexDirection:"row"},{alignItems: "center"},{justifyContent: 'center',}]}>
                <Text>Votre choix:</Text>
                <TextInput
                    keyboardType = 'number-pad'
                    value={computerTurn?'':playerChoice.toString()}
                    onChangeText={value => dispatch(setPlayerChoice(value))}
                    disabled = {computerTurn}
                    style = {styles.textInput}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                disabled = {computerTurn}
                onPress={() => dispatch(submitChoice())}
            >
                <Text>Valider</Text>
            </TouchableOpacity>

        </View>
    )


};

export default Game