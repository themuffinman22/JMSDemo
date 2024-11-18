import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { items, Category } from '../types/Item';
import useItemFilter from '../hooks/use-item-filter'
import SegmentedControl from '../components/segmented-control/segmented-control';
import { Searchbar, PaperProvider, Divider  } from 'react-native-paper';
import SortButton from '../components/sort-button/sort-button';
import TransactionList from '../components/transaction-list/transaction-list';
import styles from './index.styles'

function usePrevious(value: string = 'All') {
  const ref = useRef('All');
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function InitialScreen() {
  const {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
  } = useItemFilter(items); // custom hook

  const currentFilter = state.currentFilter;;
  const backgroundColor = useRef(new Animated.Value(0)).current;

  const colors: Record<string, string> = {
    All: '#F2F2F2',
    Bills: 'blue',
    Food: 'red',
    Misc: 'yellow',
  };

  const previousFilter = usePrevious(currentFilter);

  useEffect(() => {
    console.log('ran!')
    backgroundColor.setValue(0);
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear, 
      useNativeDriver: false, 
    }).start();
  }, [currentFilter])
  
  const interpolatedColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [colors[previousFilter], colors[currentFilter] ],
  });



  return (
    <PaperProvider>
      {/* <Button onPress={() => setBackgroundColor(new Animated.Value(0))}>
        PRESS
      </Button> */}
      <View style={styles.subContainer}>
        <Searchbar
          placeholder="Search"
          value={state.searchText}
          onChangeText={handleSearch}
          style={styles.searchBar}
        />
        <Divider/>
        <Animated.View style={{...styles.row, 
                     
                      backgroundColor: interpolatedColor
                    
        }}>
          <SegmentedControl 
            handleFilterChange={handleFilterChange} 
            currentFilter={state.currentFilter}
            values={['All', 'Bills', 'Food', 'Misc']}
          />
          <SortButton sortBy={state.sortBy} handleSortToggle={handleSortToggle}/>
        </Animated.View>
        <Divider/>
        <TransactionList data={state.filteredData}/>
    </View>
  </PaperProvider>
  );
}