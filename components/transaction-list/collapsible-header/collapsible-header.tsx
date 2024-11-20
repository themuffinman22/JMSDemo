
import React, { useState } from 'react';
import { Animated as NativeAnimated, View, Text, LayoutChangeEvent } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Icon } from 'react-native-paper';
import { useAnimatedRef } from 'react-native-reanimated';
import styles from './collapsible-header.styles';
import { numberToCurrency } from '../helpers/transaction-helpers';

interface SharedValueInterface<T> {
  value: T;
}

interface HeaderProps {
  scrollY: SharedValueInterface<number>,
  numberOfTransactions: number,
  totalSpent: number,
  filterColor: NativeAnimated.AnimatedInterpolation<string | number>
}

const CollapsibleHeader: React.FC<HeaderProps> = ({scrollY, numberOfTransactions, totalSpent, filterColor}) => {
  const [expandedHeight, setExpandedHeight] = useState(0); // height of header while expanded
  const [collapsedHeight, setCollapsedHeight] = useState(0); // height of header while collapsed

  // refs usd for getting height on layout
  const expandedRef = useAnimatedRef()
  const collapsedRef = useAnimatedRef()

  const headerStyle = useAnimatedStyle(() => {
    // use transactionList scrollY to animate height between expanded header, collapsed header, and divider
    const headerHeight = interpolate(
      scrollY.value, 
      [0, expandedHeight], 
      [expandedHeight, collapsedHeight],
      'clamp'
    );
    return {
      height: headerHeight,
    };
  });

  const headerOpacityExpanded = useAnimatedStyle(() => {
    // use height to determine when to fade in/out expanded header
    const expandedOpacity = interpolate(
      scrollY.value, 
      [0, 20], 
      [1, 0],
      'clamp'
    );
    return {
      opacity: expandedOpacity,
    };
  });

  const headerOpacityCollapsed = useAnimatedStyle(() => {
    // use height to determine when to fade in/out collapsed header
    const collapsedOpacity = interpolate(
      scrollY.value, 
      [collapsedHeight, collapsedHeight + 20], 
      [0, 1],
      'clamp'
    );
    return {
      opacity: collapsedOpacity,
    };
  });

  const handleLayoutExpanded = (event: LayoutChangeEvent) => {
    // get max height of expanded header on layout
    const { height: newHeight } = event.nativeEvent.layout;
    newHeight > expandedHeight && setExpandedHeight(newHeight); //get full height
  };

  const handleLayoutCollapsed = (event: LayoutChangeEvent) => {
    // get max height of collapsed header on layout
    const { height: newHeight } = event.nativeEvent.layout;
    newHeight > collapsedHeight && setCollapsedHeight(newHeight); //get full height
  };

  // mix of native animated and reanimated animations
  // Reanimated animates height and opacity of header when scrolling
  // Native Animated animates background color of header when category of filter changes
  return (
    <Animated.View 
      onLayout={handleLayoutExpanded} 
      ref={expandedRef} 
      style={[expandedHeight > 0 && headerStyle]}
    >
      <NativeAnimated.View style={{backgroundColor: filterColor}}>
        <Animated.View style={[headerOpacityExpanded, styles.expandedContainer]}>
          <View style={styles.expandedRow}>
              <Icon 
                source="credit-card-multiple" 
                size={20} 
                color='white'
              />
            <Text style={[styles.headerText]}>
              {`Number of Transactions: ${numberOfTransactions}`}
            </Text>
          </View>
          <View style={styles.expandedRow}>
            <Icon 
              source="account-cash" 
              size={20} 
              color='white'
            />
            <Text style={[styles.headerText]}>
              {`Total Spent: ${numberToCurrency(totalSpent)}`}
            </Text>
          </View>
        </Animated.View>
        <Animated.View 
          style={[headerOpacityCollapsed, styles.collapsedContainer]} 
          ref={collapsedRef} 
          onLayout={handleLayoutCollapsed}
        >
          <View style={styles.collapsedRow}>
            <Icon 
              source="credit-card-multiple" 
              size={16} 
              color='white'
            />
            <Text style={[styles.collapsedHeaderTextTransactions]}>
              {numberOfTransactions}
            </Text>
          </View>
          <View style={styles.collapsedRow}>
            <Icon 
              source="account-cash" 
              size={16} 
              color='white'
            />
            <Text style={[styles.collapsedHeaderTextSpent]}>
              {numberToCurrency(totalSpent)}
            </Text>
          </View>
        </Animated.View>
      </NativeAnimated.View>
      <Animated.View style={[{ height: expandedHeight }, styles.animatedDivider, headerStyle]}/>
    </Animated.View>
  )
}

export default CollapsibleHeader;