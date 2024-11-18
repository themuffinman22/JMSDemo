import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './segmented-control.styles'
import { SegmentProps } from './types/SegmentProps';

export const Segmented: React.FC<SegmentProps> = ({ handleFilterChange, values, currentFilter}) => {
  return (
    <SegmentedControl
      values={values}
      selectedIndex={values.indexOf(currentFilter)}
      onValueChange={(val) => handleFilterChange(val)}
      style={styles.segment}
    />
  )
}
