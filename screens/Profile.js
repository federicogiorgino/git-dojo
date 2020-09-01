import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Profile = ({ route, navigation }) => {
  const { login } = route.params;

  const [userInfos, setUserInfos] = useState(null);
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const INFO_URI = `https://api.github.com/users/${login}`;

  useEffect(() => {
    const fetchData = async () => {
      setErrors(false);
      setIsLoading(true);
      try {
        const infos = await axios(INFO_URI);
        setUserInfos(infos.data);
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
  } else if (!errors && !isLoading && userInfos) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name='close' size={24} color='#CD4631' />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={{ uri: userInfos.avatar_url }} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.username}>@{userInfos.login}</Text>
        </View>
        {userInfos.name && (
          <View>
            <Text style={styles.name}>{userInfos.name}</Text>
          </View>
        )}

        {userInfos.location && (
          <View style={styles.locationContainer}>
            <Entypo name='location-pin' size={20} color='#CD4631' />
            <Text style={styles.location}>{userInfos.location}</Text>
          </View>
        )}

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("Repos", { login });
            }}
          >
            <Text style={styles.cardLabel}>Repos</Text>
            <Text style={styles.cardCount}>{userInfos.public_repos}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("Gists", { login });
            }}
          >
            <Text style={styles.cardLabel}>Gists</Text>
            <Text style={styles.cardCount}>{userInfos.public_gists}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("Following", { login });
            }}
          >
            <Text style={styles.cardLabel}>Following</Text>
            <Text style={styles.cardCount}>{userInfos.following}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("Followers", { login });
            }}
          >
            <Text style={styles.cardLabel}>Followers</Text>
            <Text style={styles.cardCount}>{userInfos.followers}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardLabel}>Stats</Text>
            <Text style={styles.cardCount}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
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
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 30,
  },
  avatar: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#CD4631",
  },
  username: {
    fontSize: 20,
    color: "#CD4631",
    marginVertical: 10,
  },
  name: {
    fontSize: 35,
    color: "white",
  },
  location: { fontSize: 16, color: "#fff" },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  cardContainer: {
    marginTop: 30,
    width: "100%",
  },
  card: {
    backgroundColor: "#272727",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLabel: {
    fontSize: 20,
    color: "#cd4631",
  },
  cardCount: {
    color: "white",
  },
});
