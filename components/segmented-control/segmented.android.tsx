import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './segmented-control.styles'
import { SegmentProps } from './types/SegmentProps';
import { ColorPalette } from '@/constants/color-palette';
import { categoryColors } from '@/types/Item';

export const Segmented: React.FC<SegmentProps> = ({ handleFilterChange, values, currentFilter}) => {
  const fontColor = categoryColors[currentFilter]
  return (
    <SegmentedControl
      values={values}
      selectedIndex={values.indexOf(currentFilter)}
      onValueChange={(val) => handleFilterChange(val)}
      style={styles.segmentAndroid}
      fontStyle={{color: 'white', fontSize: 14}}
      activeFontStyle={{color: fontColor, fontSize: 16}}
    />
  )
}
