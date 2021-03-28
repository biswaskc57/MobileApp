import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, SetCurrency] = useState(0);
  const [data, SetData] = useState([]);

  useEffect(() => {
    const url = "https://api.exchangeratesapi.io/latest";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        SetData(responseJson.rates);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  }, []);

  const rateConversion = () => {
    const rate = data[currency];
    setResult((amount / rate).toFixed(5));
  };
  return (
    <View>
      <Text style={{ fontsize: 24 }}>{result}</Text>
      <TextInput
        style={{ fontSize: 18, width: 200, marginTop: 20 }}
        placeholder="item"
        type="numeric"
        onChangeText={(amount) => setAmount(amount)}
      />

      <Picker
        selectedValue={currency}
        onValueChange={(value) => SetCurrency(value)} //Value from the array i.e. currency rate
      >
        {Object.keys(data).map((item, index) => (
          <Picker.Item key={index} label={item} value={item} /> //keys from the array i.e. currency name
        ))}
      </Picker>

      <Button style={{ width: 200 }} title="Find" onPress={rateConversion} />
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
/*const [location, setLocation] = useState("");

  const getLocation = () => {
    const url =
      "http://www.mapquestapi.com/geocoding/v1/address?KEY=" +
      "tQ0hiExA5qxLHDQ9qJ78eAZ3jWUITXF4" +
      "&location=" +
      "Washington,DC";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setLocation(responseJson);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }}
    >
      <Marker
        coordinate={{ latitude: 60.201373, longitude: 24.934041 }}
        title="Haaga-Helia"
      />
    </MapView>
  );
}

/*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
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
