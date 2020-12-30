import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import BodyText from "./BodyText";

export default function AppButton({ title, type, onPress, style }) {
  return (
    <TouchableOpacity style={{ ...styles[type], ...style }} onPress={onPress}>
      <BodyText style={styles.text} isBold={true}>
        {title}
      </BodyText>
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
  },
});
