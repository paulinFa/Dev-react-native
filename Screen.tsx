import React, { useState } from "react";
import { Text, ScrollView, StyleSheet, View, Modal } from "react-native";
import Constants from "expo-constants";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import ImageScreen from "./ImageScreen";

export default function Screen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});
  return (
    <ScrollView style={{ top: Constants.statusBarHeight }}>
      <Card>
        <Card.Title>Maison</Card.Title>
        <Card.Divider />
        <Card.Image source={require("./assets/maison.jpg")} />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Détail"
          onPress={() => {
            setData((prevData) => ({
              ...prevData,
              description: "C'est une niche",
              image: "niche.jpg",
            }));
            setModalVisible(!modalVisible);
          }}
        />
      </Card>
      <Card>
        <Card.Title>Apart</Card.Title>
        <Card.Divider />
        <Card.Image source={require("./assets/apart.jpg")} />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Détail"
          onPress={() => {
            setData((prevData) => ({
              ...prevData,
              description: "C'est une niche",
              image: "niche.jpg",
            }));
            setModalVisible(!modalVisible);
          }}
        />
      </Card>
      <Card>
        <Card.Title>Autre</Card.Title>
        <Card.Divider />
        <Card.Image source={require("./assets/niche.jpg")} />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Détail"
          onPress={() => {
            setData((prevData) => ({
              ...prevData,
              description: "C'est une niche",
              image: "niche.jpg",
            }));
            setModalVisible(!modalVisible);
          }}
        />
      </Card>
      <ImageScreen
        visible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
      />
    </ScrollView>
  );
}
