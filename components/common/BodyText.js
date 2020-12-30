import React from "react";
import { StyleSheet, Text } from "react-native";

export default function BodyText({ style, isBold, children }) {
  return (
    <Text
      style={{
        ...textStyles.text,
        ...style,
        fontFamily: isBold ? "open-sans-bold" : "open-sans",
      }}
    >
      <Text>{children}</Text>
    </Text>
  );
}

const textStyles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});
