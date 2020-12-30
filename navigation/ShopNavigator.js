import { createAppContainer } from "react-navigation";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(ProductsNavigator);
