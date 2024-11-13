import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Item } from '../types/Item';
import useItemFilter from '../hooks/use-item-filter'

const items: Item[] = [
  { id: 1, name: 'Item 1', category: 'Bills', price: 100, createdAt: '2024-01-01' },
  { id: 2, name: 'Item 2', category: 'Food', price: 200, createdAt: '2024-02-01' },
  { id: 3, name: 'Item 3', category: 'Food', price: 150, createdAt: '2024-03-01' },
  { id: 4, name: 'Item 4', category: 'Misc', price: 50, createdAt: '2024-04-01' },
  { id: 5, name: 'Item 5', category: 'Bills', price: 120, createdAt: '2024-05-01' },
  { id: 6, name: 'Item 6', category: 'Misc', price: 120, createdAt: '2024-05-01' },
  { id: 7, name: 'Item 7', category: 'Bills', price: 120, createdAt: '2024-05-01' },
  { id: 8, name: 'Item 8', category: 'Food', price: 120, createdAt: '2024-05-01' },
  { id: 9, name: 'Item 9', category: 'Bills', price: 120, createdAt: '2024-05-01' },
  { id: 10, name: 'Item 10', category: 'Bills', price: 130, createdAt: '2024-05-01' },
  { id: 11, name: 'Item 100', category: 'Bills', price: 140, createdAt: '2024-05-01' },
  { id: 12, name: 'Item 1099', category: 'Bills', price: 150, createdAt: '2024-05-01' },
  { id: 13, name: 'Item 10099', category: 'Bills', price: 170, createdAt: '2024-05-01' },
  { id: 14, name: 'Item 100099', category: 'Misc', price: 160, createdAt: '2024-05-01' },
  { id: 15, name: 'Item 1000099', category: 'Food', price: 130, createdAt: '2024-05-01' },
  { id: 16, name: 'Item 1000099', category: 'Misc', price: 110, createdAt: '2024-05-01' },
];

export default function TabOneScreen() {

  const {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
  } = useItemFilter(items); // Using the custom hook

  return (
    <View style={styles.subContainer}>
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={state.searchText}
        onChangeText={handleSearch}
      />
      <Button title='Sort by Price' onPress={handleSortToggle} />
      <Button title='All' onPress={() => handleFilterChange('All')} />
      <Button title='Bills' onPress={() => handleFilterChange('Bills')} />
      <Button title='Food' onPress={() => handleFilterChange('Food')} />
      <Button title='Misc.' onPress={() => handleFilterChange('Misc')} />
      <FlatList
        data={state.filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Text>Category: {item.category}</Text>
          </View>
        )}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
