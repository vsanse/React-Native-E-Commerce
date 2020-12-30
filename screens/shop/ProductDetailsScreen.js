import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AppButton from "../../components/common/AppButton";

export default function ProductDetailsScreen({ navigation }) {
  const productId = navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedProduct.imageUrl }}
          />
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <AppButton title="Add To cart" onPress={() => {}} style={styles.btn} />
      </View>
    </View>
  );
}

ProductDetailsScreen.navigationOptions = (navigationData) => {
  const productName = navigationData.navigation.getParam("productTitle");
  return {
    headerTitle: productName,
  };
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  btnContainer: {
    marginTop: 20,
    backgroundColor: "white",
    marginBottom: 30,
  },
  btn: {
    paddingVertical: 15,
  },
  scrollview: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  description: {
    fontSize: 16,
    marginRight: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 20,
  },
});
