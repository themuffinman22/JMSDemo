import React from 'react';
import { Text  } from 'react-native-paper';
import styles from './sort-button.styles'

interface LabelProps {
  sortBy: string;
  buttonValue: string;
  labelText: String
}

const ButtonLabel: React.FC<LabelProps> = ({ sortBy, buttonValue,labelText }) => {
  return ( 
    <Text 
      style={sortBy === buttonValue ? styles.selectedText : styles.text }
      variant={"titleMedium"}
    >
      {labelText}
    </Text>
  )
}


export default ButtonLabel;