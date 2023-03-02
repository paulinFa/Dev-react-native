import React from "react";
import {
  Modal,
  TouchableHighlight,
  View,
  Text,
  Alert,
  Image,
} from "react-native";

export default function ImageScreen(props) {
  console.log(props);
  return (
    <Modal
      animationType="slide"
      style={{ backgroundColor: "grey" }}
      visible={props.visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.setModalVisible(false);
      }}
    >
      <View>
        <View>
          <Text>{props.data.description}</Text>
          {props.data.image ? (
            <Image source={require("./assets/niche.jpg")} />
          ) : null}

          <TouchableHighlight
            style={{ backgroundColor: "#2196F3" }}
            onPress={() => {
              props.setModalVisible(false);
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}
