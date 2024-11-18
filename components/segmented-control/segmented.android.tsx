import React, { useEffect } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './segmented-control.styles'
import { SegmentProps } from './types/SegmentProps';
import { Animated, Easing } from 'react-native';

export const Segmented: React.FC<SegmentProps> = ({ handleFilterChange, values, currentFilter}) => {

  // const colorMap: Record<string, string> = {
  //   all: 'grey',
  //   bills: 'red',
  //   food: 'orange',
  //   misc: 'yellow',
  // };

  // const animatedColor = new Animated.Value(0);

  // // Colors array for interpolation
  // const colors = ['grey', 'red', 'orange', 'yellow'];

  // useEffect(() => {
  //   // Trigger animation when `currentFilter` changes
  //   Animated.timing(animatedColor, {
  //     toValue: colors.indexOf(colorMap[currentFilter]),
  //     duration: 500,
  //     easing: Easing.ease,
  //     useNativeDriver: false, // We can't use native driver for color animations
  //   }).start();
  // }, [currentFilter]);

  // const interpolatedColor = animatedColor.interpolate({
  //   inputRange: [0, 1, 2, 3], // Four colors
  //   outputRange: ['grey', 'red', 'orange', 'yellow'],
  // });

  return (
    <SegmentedControl
      values={values}
      selectedIndex={values.indexOf(currentFilter)}
      onValueChange={(val) => handleFilterChange(val)}
      style={{
        ...styles.segment,
      }}
    />
  )
}
