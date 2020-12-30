import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

export default function ProductsOverviewScreen({ navigation }) {
  const products = useSelector((state) => state.products.availableProducts);

  const onViewDetail = (pid, pname) => {
    navigation.navigate({
      routeName: "ProductDetails",
      params: {
        productId: pid,
        productTitle: pname,
      },
    });
  };

  const renderItems = (itemData) => {
    const product = itemData.item;
    return (
      <ProductItem
        image={product.imageUrl}
        title={product.title}
        price={product.price}
        onAddToCart={() => {}}
        onViewDetail={() => {
          onViewDetail(product.id, product.title);
        }}
      />
    );
  };

  return <FlatList renderItem={renderItems} data={products} />;
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};
