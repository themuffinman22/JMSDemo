import React from 'react';
import { View } from 'react-native';
import { Item} from '../../types/Item';
import styles from './transaction-list.styles'
import { Text, Divider } from 'react-native-paper';

interface ListItemProps {
  item: Item
}

function formatDate(dateString: string): string {
  // Date formatter for pretty datestring
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  return formattedDate;
}

const TransactionListItem: React.FC<ListItemProps> = ({ item }) => {

  return(
    <View style={styles.itemContainer}>
      <View style={{backgroundColor: '#9E5F8A'}}>
        <Text style={styles.categoryText}variant='titleSmall'>
          {item.category}
        </Text>
      </View>
      <Divider style={{height: 2}}/>
      <View style={styles.topRow}>
        <Text style={{flex: 1}} variant='titleMedium'>{item.name}</Text>
        <Text style={{textAlign: 'right'}} variant='titleLarge'>${item.price}</Text>
      </View>
      <Text style={styles.dateText} variant='titleSmall'>{formatDate(item.createdAt)}</Text>
    </View>
)}

export default TransactionListItem;