import React, {useEffect} from 'react';
import styles from "./JuniperTextStyles";
import {useDispatch, useStore, useSelector, } from "react-redux";
import {Text, TextInput, TouchableOpacity, View, FlatList} from "react-native";
import {setPlayerChoice, submitChoice, hideMessage, initializeGame, computerPlays} from "../actions/actions-types";

const Game = () => {
    const dispatch = useDispatch();
    const {computerTurn,playerChoice,playerChoices,computerChoice,computerChoices,initialValue,displayError,errorMessage} = useSelector(state => state.juniper);

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
            <Text style={styles.title2}>
                {computerTurn? "Computer réfléchit..." : "C'est à vous !"}
            </Text>
            <Text style={styles.title2}>
                {computerChoices.length === 0? `Début du jeu: ${computerChoice}` : `Computer : ${computerChoice}` }
            </Text>
            <View style={[{flexDirection:"row"},{alignItems: "center"},{justifyContent: 'center',}]}>
                <Text>Votre choix:</Text>
                <TextInput
                    keyboardType = 'number-pad'
                    value={playerChoice.toString()}
                    onChangeText={value => dispatch(setPlayerChoice(value))}
                    style = {styles.textInput}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(submitChoice())}
            >
                <Text>Valider</Text>
            </TouchableOpacity>
            <View style={styles.choicesArray}>
                <View style={styles.choicesColumn}>
                    <Text>Vos choix:</Text>
                    {playerChoices.length > 0 &&
                    <FlatList
                        data = {[...playerChoices]}
                        renderItem = {({item}) =>
                            <Text>{item}</Text>
                        }
                        keyExtractor={index => index.toString()}
                    />}
                </View>
                <View style={styles.choicesColumn}>
                    <Text>Choix du computer :</Text>
                    {computerChoices.length > 0 &&
                    <FlatList
                        data={[...computerChoices]}
                        renderItem={({item}) =>
                            <Text>{item}</Text>
                        }
                        keyExtractor={index => index.toString()}
                    />
                    }
                </View>
            </View>
        </View>
    )


};

export default Game