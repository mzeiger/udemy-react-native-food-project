import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={Styles.backgroundStyle}>
            <Feather name="search" style={Styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={Styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
}

const Styles = StyleSheet.create(
    {
        backgroundStyle: {
            backgroundColor: 'lightgrey',
            height: 50,
            borderRadius: 10,
            marginHorizontal: 15,
            flexDirection: 'row',
            marginTop: 10,
        },
        inputStyle: {
            marginLeft: 4,
            flex: 1,
            fontSize: 18,

        }, iconStyle: {
            color: 'black',
            fontSize: 35,
            alignSelf: 'center',
        }

    }
)

export default SearchBar;
