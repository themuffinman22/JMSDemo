import React from 'react';
import { View } from 'react-native';
import { categoryColors, Item} from '../../types/Item';
import styles from './transaction-list.styles'
import { Text } from 'react-native-paper';
import { formatDate, numberToCurrency } from './helpers/transaction-helpers';

interface ItemProps {
  item: Item
}

const TransactionItem: React.FC<ItemProps> = ({ item }) => {
  const backgroundColor = categoryColors[item.category];
  return (
    <View style={styles.itemContainer}>
      <View style={{backgroundColor}}>
        <Text style={styles.categoryText}variant='titleSmall'>
          {item.category}
        </Text>
      </View>
      <View style={styles.topRow}>
        <Text style={{flex: 1, fontSize: 20}} variant='titleLarge'>{item.name}</Text>
        <Text style={{textAlign: 'right', fontWeight: 'bold', fontSize: 18}} variant='titleLarge'>
          {numberToCurrency(item.price)}
        </Text>
      </View>
      <Text style={styles.dateText} variant='titleSmall'>{formatDate(item.createdAt)}</Text>
      <View style={{flex: 1, height: 15, backgroundColor}}/>
    </View>
  )
}

export default TransactionItem;