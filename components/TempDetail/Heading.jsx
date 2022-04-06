import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default Heading = () => {
  return (
    <View>
      <Text style={styles.heading}>Temp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 40,
    color: "white",
  },
});
