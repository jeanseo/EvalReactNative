import React from 'react';
import styles from "./JuniperTextStyles";
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const JuniperText = ({children}) => {

    return(
        <SafeAreaView style={styles.container}>
        {children}
        </SafeAreaView>
    )


};

export default JuniperText