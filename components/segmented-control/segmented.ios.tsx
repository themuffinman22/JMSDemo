import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './segmented-control.styles'
import { SegmentProps } from './types/SegmentProps';

export const Segmented: React.FC<SegmentProps> = ({ handleFilterChange, values}) => {
  return (
    <SegmentedControl
      values={values}
      selectedIndex={0}
      onValueChange={(val) => handleFilterChange(val)}
      style={styles.segment}
      fontStyle={{fontSize: 14, color: 'white'}}
      activeFontStyle={{fontSize: 14, color: 'white'}}
    />
  )
}

