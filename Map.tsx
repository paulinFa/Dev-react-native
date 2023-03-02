import React, { Component } from "react";
import { Button } from "react-native";
import openMap from "react-native-open-maps";
import { WebView } from "react-native-webview";
import html_script from "./html_script";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function Map() {
  return (
    <>
      <WebView source={{ html: html_script }} style={styles.Webview} />
    </>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: "grey",
  },
  Webview: {
    flex: 2,
  },
  ButtonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Button: {
    width: 80,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
