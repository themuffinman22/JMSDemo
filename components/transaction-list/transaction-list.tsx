import React from 'react';
import { Animated, FlatList, View } from 'react-native';
import { Item} from '../../types/Item';
import styles from './transaction-list.styles'
import TransactionListItem from './transaction-list-item';
import ListEmpty from './list-empty';

interface ListProps {
  data: [Item]
  filterColor: Animated.AnimatedInterpolation<string | number>
}

const TransactionList: React.FC<ListProps> = ({ data, filterColor }) => {
  return(
    <FlatList
      contentInset={{bottom: 20}}
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TransactionListItem item={item}/>
      )}
      ListEmptyComponent={() => <ListEmpty filterColor={filterColor}/>}
      ListFooterComponent={() => <View style={styles.emptyFooter}/>}
  />
  )
}

export default TransactionList;