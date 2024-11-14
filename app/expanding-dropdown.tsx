import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const ExpandingDropdown = () => {
  // Animated values for width and height
  const [animation] = useState(new Animated.Value(0));  // Initial state: size = 0
  const [isExpanded, setIsExpanded] = useState(false); 
  // Function to toggle between expand and shrink
  const toggleView = () => {
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,  // If expanded, shrink; if not, expand
      duration: 500,
      useNativeDriver: false,  // Use 'false' because we are animating layout properties
    }).start();
    setIsExpanded(!isExpanded);  // Toggle the expansion state
  };

  // Interpolating the animation value for width and height
  const width = animation.interpolate({
    inputRange: [0, 1], // From 0 (collapsed) to 1 (expanded)
    outputRange: [0, 300], // Change the width from 0 to 300
  });

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300], // Change the height from 0 to 300
  });

  return (
    <View style={styles.container}>
      {/* Button to trigger the expansion */}
      <TouchableOpacity onPress={toggleView} style={styles.button}>
        <Text style={styles.buttonText}>Expand View</Text>
      </TouchableOpacity>

      {/* Animated View */}
      <Animated.View style={[styles.animatedView, { width, height }]}>
        <TouchableOpacity>
        <Text style={styles.text}>Expanded View</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 50,
    zIndex: 1,

  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    // zIndex: 2,    
    position: 'absolute',  // Fix the button's position
    top: 0,
    width: 100,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  animatedView: {
    backgroundColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Change: Ensured the animated view starts below the button
    // zIndex: 1,    

  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default ExpandingDropdown;
