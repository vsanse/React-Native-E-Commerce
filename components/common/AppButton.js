import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export default function AppButton({ title, type, onPress, style }) {
  return (
    <TouchableOpacity style={{ ...styles[type], ...style }} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

AppButton.defaultProps = {
  onPress: () => {},
  type: "primaryRound",
};

const styles = StyleSheet.create({
  primaryRound: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});
