import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [recipe, setRecipe] = useState([]);

  const getRecipe = () => {
    const url = "http://www.recipepuppy.com/api/?i=" + item;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setRecipe(responseJson.results);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginLeft: "5%", marginTop: "10%" }}
        keyExtractor={(item, index) => index.toString}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Image
              style={{ width: 66, height: 58 }}
              source={{ uri: item.thumbnail }}
            />
          </View>
        )}
        ItemSeparatorComponent={listSeparator}
        data={recipe}
      />

      <TextInput
        style={{ fontSize: 18, width: 200 }}
        placeholder="item"
        onChangeText={(item) => setItem(item)}
      />
      <Button style={{ width: 200 }} title="Find" onPress={getRecipe} />
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
