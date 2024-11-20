import { ColorPalette } from "@/constants/color-palette";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  expandedContainer: {
    paddingTop: 10,
    paddingBottom: 17,
  },
  expandedRow: {
    flexDirection: 'row', 
    paddingVertical: 5, 
    paddingHorizontal: 15, 
    alignItems: 'center',
  },
  collapsedContainer: {
    flexDirection: 'row', 
    paddingTop: 10, 
    paddingBottom: 15,
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
  animatedDivider: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'clear', 
    borderBottomWidth: 5, 
    borderColor: ColorPalette.gray30,
  }
});

export default styles;