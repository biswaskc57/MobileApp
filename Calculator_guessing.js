import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  const [msg, setMsg] = React.useState("");
  const [counter, setCounter] = React.useState("");
  const [randNm, setRandNm] = React.useState("");
  const [infoText, setInfoText] = React.useState("");

  React.useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    setRandNm(Math.floor(Math.random() * 10) + 1);
    setCounter(0);
    setInfoText("Guess a number between 1-100:");
  };

  const checkAnswer = () => {
    if (msg === randNm) {
      setCounter(counter + 1);
      Alert.alert("You guessed the number in " + (counter + 1) + " times");
      startGame();
    }
    if (msg < randNm) {
      setInfoText("Your number " + msg + " is too low");
      setCounter(counter + 1);
    }

    if (msg > randNm) {
      setInfoText("Your number " + msg + " is too big");
      setCounter(counter + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{infoText}</Text>
      <TextInput
        style={{ width: 100, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setMsg(parseInt(text))}
        value={msg}
      />

      <Button onPress={checkAnswer} title="Make a guess" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
