import React from 'react';
import { View } from 'react-native';
import { items } from '../types/Item';
import useItemFilter from '../hooks/use-item-filter'
import SegmentedControl from '../components/segmented-control/segmented-control';
import { Searchbar, PaperProvider, Divider  } from 'react-native-paper';
import SortButton from '../components/sort-button/sort-button';
import TransactionList from '../components/transaction-list/transaction-list';
import styles from './index.styles'

export default function InitialScreen() {
  const {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
  } = useItemFilter(items); // custom hook

  return (
    <PaperProvider>
      <View style={styles.subContainer}>
        <Searchbar
          placeholder="Search"
          value={state.searchText}
          onChangeText={handleSearch}
          style={styles.searchBar}
        />
        <Divider/>
        <View style={styles.row}>
          <SegmentedControl 
            handleFilterChange={handleFilterChange} 
            currentFilter={state.currentFilter}
            values={['All', 'Bills', 'Food', 'Misc']}
          />
          <SortButton sortBy={state.sortBy} handleSortToggle={handleSortToggle}/>
        </View>
        <Divider/>
        <TransactionList data={state.filteredData}/>
    </View>
  </PaperProvider>
  );
}