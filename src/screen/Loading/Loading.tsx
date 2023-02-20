import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { image } from '../../../assets/image'
const Loading = () => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
      >
        <View style={styles.viewLoading}>
          <Image source={image.loading} style={styles.loading} />
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  viewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  loading: {
    width: 100,
    height: 100
  }

});

export default Loading;