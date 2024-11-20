import React, { useEffect, useRef } from 'react';
import { Animated as NativeAnimated, FlatList, View } from 'react-native';
import { Item} from '../../types/Item';
import styles from './transaction-list.styles'
import TransactionItem from './transaction-item';
import ListEmpty from './list-empty';
import { useSharedValue } from 'react-native-reanimated';
import CollapsibleHeader from './collapsible-header/collapsible-header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ListProps {
  data: [Item],
  numberOfTransactions: number,
  totalSpent: number,
  filterColor: NativeAnimated.AnimatedInterpolation<string | number>
  searchText: string,
  currentFilter: string,
  sortBy: string,
}

const TransactionList: React.FC<ListProps> = ({ 
  data, 
  filterColor,
  numberOfTransactions,
  totalSpent,
  searchText,
  sortBy,
  currentFilter 
}) => {
  
  const scrollY = useSharedValue(0); //for flatlist and header
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    // reset scroll position to top on filter, sort, or search update
    flatListRef.current && flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
  }, [searchText, currentFilter, sortBy])

  return (
    <View style={{flex: 1}}>
      <CollapsibleHeader
        scrollY={scrollY}
        numberOfTransactions={numberOfTransactions}
        totalSpent={totalSpent}
        filterColor={filterColor}
      />
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TransactionItem item={item}/>
      )}
      ListEmptyComponent={() => <ListEmpty filterColor={filterColor}/>}
      ListFooterComponent={() => <View style={{...styles.emptyFooter, height: insets.bottom + 10 }}/>}
      onScroll={(event) => {
        scrollY.value = event.nativeEvent.contentOffset.y
      }}
      ref={flatListRef}
      scrollEventThrottle={16}
    />
    </View>
  )
}

export default TransactionList;