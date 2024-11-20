import React from 'react';
import { Animated, View } from 'react-native';
import styles from './transaction-list.styles'
import { Text } from 'react-native-paper';

interface ListProps {
  filterColor: Animated.AnimatedInterpolation<string | number>
}

const ListEmpty: React.FC<ListProps> = ({ filterColor }) => {
  const backgroundColor = filterColor
  return (
    <View style={styles.itemContainer}>
      <Animated.View style={{backgroundColor}}>
        <Text style={styles.categoryText} variant='titleSmall'>
          No Matching Transactions
        </Text>
      </Animated.View>
      <View style={styles.emptyRow}>
        <Text variant='titleMedium' >
          Your search did not match any of the transactions in your transaction history.
        </Text>
      </View>
      <Animated.View style={{flex: 1, height: 15, backgroundColor}}/>
    </View>
  )
}

export default ListEmpty;