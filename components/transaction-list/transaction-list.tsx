import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Item} from '../../types/Item';
import styles from './transaction-list.styles'
import TransactionListItem from './transaction-list-item';

interface ListProps {
  data: [Item]
}

const TransactionList: React.FC<ListProps> = ({ data }) => {
  return(
    <FlatList
      contentInset={{bottom: 20}}
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TransactionListItem item={item}/>
    )}
  />
  )
}

export default TransactionList;