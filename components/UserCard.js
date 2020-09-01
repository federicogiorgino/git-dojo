import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, Linking } from "react-native";

const UserCard = ({ user, navigation }) => {
  const { login } = user;
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Profile", { login })}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.username}>{user.login}</Text>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#272727",
    marginVertical: 5,
    padding: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  username: {
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
  },
  avatar: { width: 50, height: 50 },
  bottomRow: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  rowText: {
    color: "white",
    marginLeft: 5,
    fontSize: 14,
  },
});
