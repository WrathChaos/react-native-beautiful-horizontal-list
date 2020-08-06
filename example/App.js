import React from "react";
import { View, Text, Image, StatusBar, SafeAreaView } from "react-native";

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
  renderHeader = () => (
    <View
      style={{
        margin: 12,
        paddingBottom: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 36, fontStyle: "italic", fontWeight: "bold" }}>
        Today
      </Text>
      <Image
        source={require("./assets/arrow.png")}
        style={{ height: 20, width: 20, left: 24 }}
      />
      <View
        style={{
          marginLeft: "auto",
          backgroundColor: "#fdfdfd",
          borderRadius: 8,
          padding: 5,
          right: 32,
          shadowRadius: 8,
          shadowOpacity: 0.1,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        <Image
          source={require("./assets/ayo-ogunseinde-unsplash.jpg")}
          style={{ height: 45, width: 35 }}
        />
      </View>
    </View>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f5f9" }}>
        <View style={{ left: 24, top: 32 }}>
          {renderHeader()}
          <BeautifulHorizontalList data={staticData} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
