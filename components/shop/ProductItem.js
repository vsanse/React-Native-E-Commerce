import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import AppButton from "../common/AppButton";
import BodyText from "../common/BodyText";

export default function ProductItem({
  image,
  title,
  price,
  onViewDetail,
  onAddToCart,
}) {
  return (
    <TouchableOpacity onPress={onViewDetail} activeOpacity={0.5}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.details}>
          <BodyText style={styles.title}>{title}</BodyText>
          <BodyText style={styles.price} isBold={true}>
            ${price.toFixed(2)}
          </BodyText>
        </View>
        <View style={styles.actions}>
          <AppButton
            title="View Details"
            onPress={onViewDetail}
            color={Colors.primaryColor}
          />
          <AppButton
            title="To Cart"
            onPress={onAddToCart}
            color={Colors.primaryColor}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    height: 300,
    margin: 20,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});
