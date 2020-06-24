import React from 'react';
import {Text, TouchableHighlight, View, Modal, StyleSheet} from "react-native";
import {setPlayerChoice, submitChoice} from "../actions/actions-types";
import {useDispatch, useSelector} from "react-redux";


const AlertModal = () => {

    const dispatch = useDispatch();
    const {displayError, errorMessage} = useSelector(state => state.juniper);

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={displayError}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={modalStyles.centeredView}>
                <View style={modalStyles.modalView}>
                    <Text style={modalStyles.modalText}>Hello World!</Text>

                    <TouchableHighlight
                        style={{ ...modalStyles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            //setModalVisible(!modalVisible);
                        }}
                    >
                        <Text modalStyles={modalStyles.textStyle}>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
};


const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});


export default AlertModal