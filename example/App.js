import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import BeautifulHorizontalList from "./lib/BeautifulHorizontalList";

const staticData = [
  {
    title: "Running",
    value: "8,984",
    unit: "Steps",
    primaryColor: "#10CFE4",
    imageSource: require("./assets/run.png"),
  },
  {
    title: "Cycling",
    value: "2.6",
    unit: "Mil",
    primaryColor: "#c84cf0",
    imageSource: require("./assets/cyclist-silhouette.png"),
  },
  {
    title: "Swimming",
    value: "9501",
    unit: "Stoke",
    primaryColor: "#10E471",
    imageSource: require("./assets/swimmer.png"),
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f5f9" }}>
        <View style={{ left: 24, top: 32 }}>
          <BeautifulHorizontalList data={staticData} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
