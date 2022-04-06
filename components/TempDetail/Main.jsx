import { Text, View } from "react-native";
import React, { Component } from "react";
import Heading from "./Heading";
import ManualControl from "./ManualControl";

const Main = () => {
  return (
    <View>
      <Heading />
      <ManualControl />
    </View>
  );
};

export default Main;
