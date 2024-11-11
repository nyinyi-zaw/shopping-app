import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" size={24} color="black" />
      <View style={styles.TextContainer}>
        <Text style={styles.quantity}>5</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  TextContainer: {
   backgroundColor:"red",
   width:20,
   height:20,
   borderRadius:10,
   marginLeft:-10,
   marginTop:-5,
   justifyContent:"center",
   alignItems:"center"
  },
  quantity: {
    color:"white",
    fontSize: 11,
    fontWeight: "bold",
  },
});
