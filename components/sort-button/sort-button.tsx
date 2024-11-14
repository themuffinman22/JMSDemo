import React from 'react';
import { View} from 'react-native';
import { SortCategory} from '../../types/Item';
import { Button, Portal, Dialog, Divider  } from 'react-native-paper';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import styles from './sort-button.styles'
import ButtonLabel from './button-label';

interface SortProps {
  sortBy: string;
  handleSortToggle: (sortCategory: SortCategory) => void;
}

const SortButton: React.FC<SortProps> = ({ sortBy, handleSortToggle }) => {

  const [visible, setVisible] = React.useState(false); // state for dialog

  //handlers for dialog
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const setSort = (sort: SortCategory) => {
    handleSortToggle(sort)
    hideDialog()
  }

return ( 
  <View>
    <Button 
      labelStyle={styles.sortLabel} 
      style={styles.sort} 
      icon="sort" 
      mode="contained" 
      onPress={showDialog}
    >
      Sort
    </Button>
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Sort By:</Dialog.Title>
        <Dialog.Content style={styles.dialogContent}>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            selected={sortBy}
            onSelected={(value: SortCategory) => setSort(value)}
            radioBackground="purple"
          >
            <Divider/>
            <RadioButtonItem
              value='PriceASC' 
              label={<ButtonLabel sortBy={sortBy} buttonValue='PriceASC' labelText='Highest Price'/>}
              style={styles.buttonItem}            
            />
            <Divider/>
            <RadioButtonItem
              value='PriceDSC' 
              label={<ButtonLabel sortBy={sortBy} buttonValue='PriceDSC' labelText='Lowest Price'/>}
              style={styles.buttonItem}            
            />
            <Divider/>
            <RadioButtonItem
              value='DateASC' 
              label={<ButtonLabel sortBy={sortBy} buttonValue='DateASC' labelText='Most Recent'/>}
              style={styles.buttonItem}            
            />
            <Divider/>
            <RadioButtonItem
              value='DateDSC' 
              label={<ButtonLabel sortBy={sortBy} buttonValue='DateDSC' labelText='Least Recent'/>}
              style={styles.buttonItem}            
            />
            <Divider/>
          </RadioButtonGroup>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Dismiss</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>
)}

export default SortButton;