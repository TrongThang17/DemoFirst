import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native'
import Modal from "react-native-modal";

interface CustomPopup {
  onPress?: () => void;
  modalVisible?: boolean
}
const customPopup: React.FC<CustomPopup> = (props) => {
  return (
    <View>
      <Modal isVisible={props.modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete it?</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={props.onPress}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={props.onPress}>
              <Text style={styles.textStyle}>CANCLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

  )
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


})



export default customPopup