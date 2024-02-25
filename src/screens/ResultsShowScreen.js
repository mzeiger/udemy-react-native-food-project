import React, { useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // since this is an empty object, not an array

  const id = navigation.getParam("id");
//console.log(result);


  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }


   //console.log(result.hours[0].is_open_now);

  const addressCityStateZip = `${result.location.city} ${result.location.state} ${result.location.zip_code}`;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.addressStyle}>{result.location.address1}</Text>
      {result.location.address2 === "" ? null : (
        <Text style={styles.addressStyle}>{result.location.address2}</Text>
      )}
      <Text style={styles.addressStyle}> {addressCityStateZip}</Text>
      <Text style={styles.addressStyle}>{result.display_phone}</Text>
      {result.hours[0].is_open_now ? (
        <Text style={styles.addressStyle}>😊 Open 😊</Text>
      ) : (
        <Text style={styles.addressStyle}>🤨 Closed 🤨</Text>
      )}
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
    marginVertical: 5,
    alignSelf: "center",
  },
  nameStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 2,
  },
  addressStyle: {
    fontSize: 16,
    alignSelf: "center",
  },
  viewStyle: {
    flex: 1,
    alignContent: "center",
  },
});

export default ResultsShowScreen;
