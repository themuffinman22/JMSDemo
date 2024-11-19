import React from 'react';
import { Animated, View } from 'react-native';
import { items } from '../types/Item';
import useItemFilter from '../hooks/use-item-filter'
import SegmentedControl from '../components/segmented-control/segmented-control';
import { Searchbar, PaperProvider, Divider  } from 'react-native-paper';
import SortButton from '../components/sort-button/sort-button';
import TransactionList from '../components/transaction-list/transaction-list';
import styles from './index.styles'
import { ColorPalette } from '@/constants/color-palette';

export default function InitialScreen() {
  const {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
    filterColor,
  } = useItemFilter(items); // custom hook

  return (
    <PaperProvider>
      <View style={styles.subContainer}>
        <Searchbar
          placeholder="Search Transactions"
          value={state.searchText}
          onChangeText={handleSearch}
          style={styles.searchBar}
        />
        <Animated.View style={{backgroundColor: filterColor}}>
          <Divider style={{height: 5, backgroundColor: ColorPalette.gray50}}/>
          <Animated.View 
            style={{
              ...styles.row, 
            }}
          >
            <SegmentedControl 
              handleFilterChange={handleFilterChange} 
              currentFilter={state.currentFilter}
              values={['All', 'Bills', 'Food', 'Misc']}
            />
            <SortButton sortBy={state.sortBy} handleSortToggle={handleSortToggle}/>
          </Animated.View>
          <Divider style={{height: 1, backgroundColor: ColorPalette.gray50}}/>
        </Animated.View>
        <TransactionList filterColor={filterColor} data={state.filteredData}/>
    </View>
  </PaperProvider>
  );
}