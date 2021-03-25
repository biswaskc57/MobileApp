// Add alsoimports& export
// This is the  secondpage
import React from "react";
import { View, Text, style, FlatList, StyleSheet } from "react-native";
export default function History({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={styles.button}>
      <FlatList
        style={styles.list}
        data={user}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    width: 150,
    flexDirection: "row",
    color: "blue",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 20,
  },
});
