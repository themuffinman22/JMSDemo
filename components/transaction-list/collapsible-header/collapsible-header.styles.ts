import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  expandedContainer: {
    paddingVertical: 10,
  },
  expandedRow: {
    flexDirection: 'row', 
    paddingVertical: 5, 
    paddingHorizontal: 15, 
    alignItems: 'center',
  },
  collapsed: {
    flexDirection: 'row', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    position: 'absolute',
    top: 0,
    flex: 1,
  },
  collapsedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
  collapsedHeaderTextTransactions: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    minWidth: 42,
  },
  collapsedHeaderTextSpent: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default styles;