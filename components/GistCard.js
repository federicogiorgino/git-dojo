import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

const GistCard = ({ gist }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Linking.openURL(gist.html_url);
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
        <AntDesign name='folder1' size={30} color='#CD4631' />
        <Text numberOfLines={1} style={styles.repoTitle}>
          {gist.description}
        </Text>
      </View>
      <View style={styles.bottomRow}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rowContainer}>
            <MaterialIcons name='comment' size={24} color='#cd4631' />
            <Text style={styles.rowText}>{gist.comments}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.rowText}>{moment(gist.created_at).format("MMM Do YYYY")}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GistCard;

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
