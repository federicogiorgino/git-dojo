import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

const Home = (props) => {
  const [login, setLogin] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Git Dojo</Text>
        <Entypo name='github' size={100} color='#CD4631' />
      </View>
      <View style={styles.form}>
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          placeholder='Search for a Github User'
          onChangeText={(text) => {
            setLogin(text);
          }}
          value={login}
        />
        <TouchableOpacity
          disabled={login === ""}
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Profile", { login });
            setLogin("");
          }}
        >
          <Feather name='search' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 40, marginRight: 30, color: "white" },
  logo: { width: 70, height: 70 },
  form: { flexDirection: "row", marginTop: 20, paddingHorizontal: 10 },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 60,
    height: 40,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#CD4631",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  list: {
    marginTop: 30,
    marginBottom: 100,
  },
});
