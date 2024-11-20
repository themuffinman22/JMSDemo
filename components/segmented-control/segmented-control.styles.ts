import { ColorPalette } from '@/constants/color-palette';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  segment: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1, 
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
    tintColor: ColorPalette.gray75,
    backgroundColor: ColorPalette.gray10,
  },
  segmentAndroid: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1, 
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: ColorPalette.gray10,
  },
});

export default styles;