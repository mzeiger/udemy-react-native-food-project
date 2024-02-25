import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{`${result.rating} Stars,   ${result.review_count} Reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 100,
    borderRadius: 8,
  },
  viewStyle: {
    marginLeft: 5,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ResultsDetail;
