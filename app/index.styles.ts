import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'lavender'
  },
  sortLabel: {
    padding: 0, 
    margin: 0
  }, 
  sort: {
    width: 90, 
    height: 40, 
    marginRight: 12.5,
  },
  searchBar: {
    borderRadius: 0,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: "#f2f2f2",
  }
});

export default styles;