import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (text: string) => {
        setSearchTerm(text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Søk</Text>
            <TextInput
                style={styles.searchField}
                placeholder="Søk filmer/skuespillere/sjangere..."
                value={searchTerm}
                onChangeText={handleSearchChange}
                placeholderTextColor="white"
                autoFocus={true} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 100,
        paddingHorizontal: 20,
    },
    headline: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchField: {
        width: '100%',
        backgroundColor: 'gray',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
    },
});

export default SearchPage;
