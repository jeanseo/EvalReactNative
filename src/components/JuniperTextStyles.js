import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    
    title1: {

        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
    },
    title2: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
    },
    paragraph: {
        textAlign: 'left',
        fontSize: 14,
        margin: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10
    },
    topMenu: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent : 'space-around',
    },
    textInput: {
        borderWidth : 1,
        width : 80,
        marginLeft : 5,
    },
    choicesArray : {
        flex:2,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'stretch',
        margin:10,
        borderWidth : 1,
    },
    choicesColumn : {
        flex: 1,
        alignSelf:'stretch',
    }
});

export default styles