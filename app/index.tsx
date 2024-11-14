import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Item, SortCategory, Category } from '../types/Item';
import useItemFilter from '../hooks/use-item-filter'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { Searchbar, Button, PaperProvider, Portal, Dialog, Divider  } from 'react-native-paper';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const items: Item[] = [
  { id: 1, name: 'Netflix', category: 'Bills', price: 15.49, createdAt: '2024-11-01' },
  { id: 2, name: 'Panda Express', category: 'Food', price: 14.65, createdAt: '2024-11-01' },
  { id: 3, name: 'SweetGreen', category: 'Food', price: 118.99, createdAt: '2024-11-01' },
  { id: 4, name: 'Pokémon Cards', category: 'Misc', price: 4.99, createdAt: '2024-11-02' },
  { id: 5, name: 'Comcast Internet', category: 'Bills', price: 120, createdAt: '2024-11-03' },
  { id: 6, name: 'Oil Change', category: 'Misc', price: 43.66, createdAt: '2024-11-03' },
  { id: 7, name: 'Electric & Gas', category: 'Bills', price: 121.60, createdAt: '2024-11-04' },
  { id: 8, name: 'Whole Foods', category: 'Food', price: 85.79, createdAt: '2024-11-04' },
  { id: 9, name: 'iPhone -Monthly', category: 'Bills', price: 39.99, createdAt: '2024-11-04' },
  { id: 10, name: 'Car -Monthly', category: 'Bills', price: 459.99, createdAt: '2024-11-04' },
  { id: 11, name: 'Water & Sewer', category: 'Bills', price: 40.00, createdAt: '2024-11-05' },
  { id: 12, name: 'Rent - Monthly', category: 'Bills', price: 1820.00, createdAt: '2024-11-05' },
  { id: 13, name: 'Veterinarian', category: 'Bills', price: 289.32, createdAt: '2024-11-06' },
  { id: 14, name: 'Elden Ring DLC', category: 'Misc', price: 39.99, createdAt: '2024-11-06' },
  { id: 15, name: 'Trattoria Carina', category: 'Food', price: 72.54, createdAt: '2024-11-06' },
  { id: 16, name: 'Gyu-Kaku Japanese BBQ', category: 'Food', price: 78.99, createdAt: '2024-11-07' },
  { id: 17, name: 'Zara', category: 'Misc', price: 89.99, createdAt: '2024-11-08' },
  { id: 18, name: 'Kohl\'s', category: 'Misc', price: 299.99, createdAt: '2024-11-08' },
  { id: 19, name: 'Coke Zero', category: 'Food', price: 4.99, createdAt: '2024-11-08' },
  { id: 20, name: 'More Pokémon Cards', category: 'Misc', price: 299.99, createdAt: '2024-11-09' },
  { id: 21, name: 'Cheesecake Factory', category: 'Food', price: 65.38, createdAt: '2024-11-09' },
  { id: 22, name: 'Puttshack Philadelphia', category: 'Misc', price: 45.38, createdAt: '2024-11-10' },
  { id: 23, name: 'Eras Tour Tickets', category: 'Misc', price: 8635.81, createdAt: '2024-11-10' },
  { id: 24, name: 'Student Loans -Monthly', category: 'Bills', price: 651.65, createdAt: '2024-11-10' },
  { id: 25, name: 'Haircut', category: 'Misc', price: 39.99, createdAt: '2024-11-11' },
  { id: 26, name: 'Planet Fitness', category: 'Misc', price: 9.99, createdAt: '2024-11-11' },
  { id: 27, name: 'Wegman\'s', category: 'Food', price: 37.38, createdAt: '2024-11-12' },
  { id: 28, name: 'EZ-Pass', category: 'Bills', price: 19.99, createdAt: '2024-11-13' },
  { id: 29, name: 'Zama', category: 'Food', price: 129.38, createdAt: '2024-11-13' },
  { id: 30, name: 'Umai Umai', category: 'Food', price: 62.38, createdAt: '2024-11-13' },
];

export default function TabOneScreen() {

  const {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
  } = useItemFilter(items); // Using the custom hook

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const currentSort = state.sortBy;
  const setSort = (sort: SortCategory) => {
    handleSortToggle(sort)
    hideDialog()
  }

  return (
    <PaperProvider>
    <View style={styles.subContainer}>
      <Searchbar
        placeholder="Search"
        value={state.searchText}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <SegmentedControl
          values={['All', 'Bills', 'Food', 'Misc']}
          selectedIndex={0}
          onValueChange={(val:Category) => handleFilterChange(val)}
          style={{margin: 12.5, flex: 1, paddingVertical: 20 }}
        />
        <Button 
          labelStyle={styles.sortLabel} 
          style={styles.sort} 
          icon="sort" 
          mode="contained" 
          onPress={showDialog}
        >
          Sort
        </Button>
      </View>
      <Divider/>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Sort By:</Dialog.Title>
          <Dialog.Content>
            <RadioButtonGroup
              containerStyle={{ marginBottom: 10 }}
              selected={currentSort}
              onSelected={(value: SortCategory) => setSort(value)}
              radioBackground="green"
            >
              <RadioButtonItem 
                value='PriceASC' 
                label={<Text style={{ color: "red" }}>Highest Price</Text>}              
              />
              <RadioButtonItem
                value='PriceDSC'
                label={<Text style={{ color: "red" }}>Lowest Price</Text>}
              />
              <RadioButtonItem 
                value='DateASC' 
                label={<Text style={{ color: "red" }}>Most Recent</Text>}              
              />
              <RadioButtonItem
                value='DateDSC'
                label={<Text style={{ color: "red" }}>Least Recent</Text>}
              />
            </RadioButtonGroup>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Dismiss</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 10}}
        data={state.filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Date: {item.createdAt}</Text>

          </View>
        )}
      />
  </View>
  </PaperProvider>
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
    // paddingTop: 10,
    // paddingHorizontal: 10,
    // padding: 20,
  },
  sortLabel: {
    padding: 0, 
    margin: 0
  }, 
  sort: {
    width: 90, 
    height: 40, 
    marginRight: 12.5,
  },
  searchBar: {
    borderRadius: 0,
    // height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    // marginBottom: 10,
    // paddingLeft: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
