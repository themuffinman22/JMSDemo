import { StyleSheet } from 'react-native';

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
    paddingTop: 10,
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
});

export default styles;