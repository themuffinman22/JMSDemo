import React from 'react';
import { View } from 'react-native';
import { categoryColors, Item} from '../../types/Item';
import styles from './transaction-list.styles'
import { Text } from 'react-native-paper';

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
  const backgroundColor = categoryColors[item.category];
  return(
    <View style={styles.itemContainer}>
      <View style={{backgroundColor}}>
        <Text style={styles.categoryText}variant='titleSmall'>
          {item.category}
        </Text>
      </View>
      <View style={styles.topRow}>
        <Text style={{flex: 1, fontSize: 20}} variant='titleLarge'>{item.name}</Text>
        <Text style={{textAlign: 'right', fontWeight: 'bold', fontSize: 18}} variant='titleLarge'>${item.price}</Text>
      </View>
      <Text style={styles.dateText} variant='titleSmall'>{formatDate(item.createdAt)}</Text>
      <View style={{flex: 1, height: 15, backgroundColor}}/>
    </View>
    )
  }

export default TransactionListItem;