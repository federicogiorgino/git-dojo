import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import UserCard from "../components/UserCard";

const Followers = ({ route, navigation }) => {
  const { login } = route.params;

  const [userFollowers, setUserFollowers] = useState(null);
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const FOLLOWERS_URI = `https://api.github.com/users/${login}/followers`;

  useEffect(() => {
    const fetchData = async () => {
      setErrors(false);
      setIsLoading(true);
      try {
        const followers = await axios(FOLLOWERS_URI);
        setUserFollowers(followers.data);
      } catch (error) {
        setErrors(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [login]);

  if (errors) {
    return (
      <View style={styles.containerCentered}>
        <Text>An error has Occured</Text>
      </View>
    );
  } else if (!errors && isLoading) {
    return (
      <View style={styles.containerCentered}>
        <ActivityIndicator color='#CD4631' size='large' />
      </View>
    );
  } else if (!errors && !isLoading && userFollowers) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{login}'s Followers</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name='arrow-back' size={24} color='#cd4631' />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ width: "100%", paddingHorizontal: 10 }}>
          {userFollowers.map((user, i) => (
            <UserCard user={user} key={i} navigation={navigation} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return null;
  }
};

export default Followers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: { fontSize: 25, color: "#CD4631", fontWeight: "bold" },
  topRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerCentered: {
    flex: 1,
    width: "100%",
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "100%",
    backgroundColor: "#333333",
  },
});
