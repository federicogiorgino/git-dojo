import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { AntDesign, FontAwesome5, FontAwesome, Octicons } from "@expo/vector-icons";

const RepoCard = ({ repo }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Linking.openURL(repo.html_url);
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
        <Octicons name='repo' size={24} color='#cd4631' />
        <Text numberOfLines={1} style={styles.repoTitle}>
          {repo.name}
        </Text>
      </View>
      <View style={styles.bottomRow}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rowContainer}>
            <FontAwesome5 name='code' size={14} color='#CD4631' />
            <Text style={styles.rowText}>{repo.language}</Text>
          </View>
          <View style={styles.rowContainer}>
            <AntDesign name='star' size={14} color='yellow' />
            <Text style={styles.rowText}>{repo.stargazers_count}</Text>
          </View>
          <View style={styles.rowContainer}>
            <FontAwesome name='code-fork' size={14} color='#cd4631' />
            <Text style={styles.rowText}>{repo.forks_count}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.rowText}>{repo.size} kb</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RepoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#272727",
    marginVertical: 5,
    padding: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "column",
  },
  repoTitle: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    fontSize: 22,
    maxWidth: "90%",
  },
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
