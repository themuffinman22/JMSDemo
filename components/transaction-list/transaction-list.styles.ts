import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  contentContainer: {
    paddingHorizontal: 10,
    backgroundColor: "lavender",
  },
  itemContainer: {
    marginTop: 10, 
    backgroundColor: "#F2F2F2", 
    borderRadius: 5, 
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row', 
    paddingHorizontal: 10, 
    paddingTop: 5,
  },
  dateText: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  categoryText: {
    padding: 4, 
    fontWeight: "bold", 
    flex: 1, 
    color: 'white', 
    marginLeft: 7,
   },
   emptyFooter: {
    backgroundColor: 'transparent',
    // inset not working for flatlist, invisible footer instead
    height: Platform.OS === 'ios' ? 30 : 15, 
   }
});

export default styles;