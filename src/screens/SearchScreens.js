import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

// I'm not using useEffect but it is used to run something the first
//time the screen is rendered
// i.e.:
//    useEffect( () => {some function}, []);
//the [] tells the function to be called only once

const createTwoButtonAlert = (e) =>
  Alert.alert("Problem", e, [
    {
      text: "",
      style: "cancel",
    },
    { text: "OK" },
  ]);

SearchScreen = () => {
  const [searchTerm, setTerm] = useState("");
  const [results, setResults] = useState([]);


  const searchAPI = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "colorado springs",
        },
      });

      setResults(response.data.businesses);
      //console.log(response.data.businesses);
    } catch (e) {
      createTwoButtonAlert(e.toString());
    }
  };

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  // console.log(navigation);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={searchTerm}
        placeholder = 'Search by Business Type'
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()}
      />
      <Text style={styles.textStyle1}>Search Screen</Text>
      {searchTerm === "" ? (
        <Text style={styles.textStyle2}>Enter a search</Text>
      ) : (
        <Text style={styles.textStyle2}>
          We have found {results.length} results
        </Text>
      )}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
        <ResultsList
          title="Very Fancy"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5,
    color: "blue",
  },
  textStyle2: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 5,
  },
});

export default SearchScreen;
