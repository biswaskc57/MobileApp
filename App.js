import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/HomeScreen";
import SettingScreen from "./Components/SettingScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*const [msg1, setMsg1] = React.useState("");
  const [msg2, setMsg2] = React.useState("");
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState([]);

  const addToString = () => {
    //new variable has been defined because state would show previous value
    //because they are synchronous
    const sum = parseFloat(msg1) + parseFloat(msg2);

    setText(sum);
    setData([...data, { key: msg1 + " + " + msg2 + " = " + sum }]);
  };

  const subToString = () => {
    const sub = parseFloat(msg1) - parseFloat(msg2);
    setText(sub);
    setData([...data, { key: msg1 + " - " + msg2 + " = " + sub }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result:{text}</Text>
        <TextInput
          style={{
            fontsize: 18,
            width: 120,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(msg1) => setMsg1(msg1)}
          value={String(msg1)}
        />
        <TextInput
          style={{
            fontsize: 18,
            width: 120,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(msg2) => setMsg2(msg2)}
          value={String(msg2)}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={addToString} title=" + " />
        <Button onPress={subToString} title=" - " />
      </View>
      <View style={styles.button}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
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
});*/
