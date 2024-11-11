import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  actionText: string;
};
const Title = ({ title, actionText }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{title}</Text>
      <Pressable>
        <Text style={styles.btnText}>{actionText}</Text>
      </Pressable>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  textContainer: {
    fontWeight: "500",
    fontSize: 16,
  },
  btnText: {
    fontWeight: "500",
    color: "grey",
  },
});
