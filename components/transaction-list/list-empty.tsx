import React from 'react';
import { View } from 'react-native';
import styles from './transaction-list.styles'
import { Text } from 'react-native-paper';
import { ColorPalette } from '@/constants/color-palette';

const ListEmpty= () => {
  const backgroundColor = ColorPalette.all
  return(
    <View style={styles.itemContainer}>
      <View style={{backgroundColor}}>
        <Text style={styles.categoryText} variant='titleSmall'>
          No Matching Transactions
        </Text>
      </View>
      <View style={styles.emptyRow}>
        <Text variant='titleMedium' >
          Your search did not match any of the transactions in your transaction history.
        </Text>
      </View>
      <View style={{flex: 1, height: 15, backgroundColor}}/>
    </View>
  )
}

export default ListEmpty;