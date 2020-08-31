import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import RepoCard from "../components/RepoCard";
import { MaterialIcons } from "@expo/vector-icons";

const Repos = ({ route, navigation }) => {
  const { login } = route.params;
  const REPOS_URI = `https://api.github.com/users/${login}/repos?per_page=500`;

  const [userRepos, setUserRepos] = useState(null);
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setErrors(false);
      setIsLoading(true);
      try {
        const repos = await axios(REPOS_URI);
        setUserRepos(repos.data);
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
  } else if (!errors && !isLoading && userRepos) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{login}'s Repos</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name='arrow-back' size={24} color='#cd4631' />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ width: "100%", paddingHorizontal: 10 }}>
          {userRepos.map((repo, i) => (
            <RepoCard key={i} repo={repo} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return null;
  }
};

export default Repos;

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
