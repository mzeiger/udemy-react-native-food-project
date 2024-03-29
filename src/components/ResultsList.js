import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";


const ResultsList = ({ title, results, navigation }) => {
  //console.log(navigation);

  if (results.length === 0) {
    return null;
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.resultsStyle}>Results: {results.length}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})} >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 16,
    marginLeft: 5,
  },
  itemText: {
    marginHorizontal: 4,
    paddingHorizontal: 2,
  },
  resultsStyle: {
    marginHorizontal: 4,
    paddingHorizontal: 2,
  },
  viewStyle: {
    marginBottom: 8,
  },
});

export default withNavigation(ResultsList);
