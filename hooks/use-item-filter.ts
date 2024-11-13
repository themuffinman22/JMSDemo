import { useEffect, useReducer } from 'react';
import { Category, Item } from '../types/Item';

type Action =
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_FILTER'; payload: Category }
  | { type: 'TOGGLE_SORT' };

const initialState = {
  searchText: '',
  currentFilter: 'All', // Default
  sortOrder: true, // Sort order (false = ascending, true = descending)
  filteredData: [] as Item[], // Initial filtered data
  items: [] as Item[],
};

// Helper function for sorting
const sortData = (data: Item[], sortOrder: boolean): Item[] => {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.createdAt);  // Convert 'createdAt' to Date object
    const dateB = new Date(b.createdAt);  // Convert 'createdAt' to Date object

    if (sortOrder) {
      return dateA.valueOf() - dateB.valueOf();  // Ascending order: smaller dates come first
    } else {
      return dateB.valueOf() - dateA.valueOf();  // Ascending order: smaller dates come first
    }
  });
  // return [...data].sort((a, b) => {
  //   if (sortOrder) {
  //     return b.price - a.price; // Sort by descending 
  //   } else {
  //     return a.price - b.price; // Sort by ascending
  //   }
  // });
};

// Helper function to filter data by category and search text
const filterAndSearchData = (items: Item[], category: Category, searchText: string): Item[] => {
  // If category is 'All', don't filter by category but apply search
  const filteredByCategory = category === Category.All 
    ? items  
    : items.filter(item => item.category === category);

  // Apply search filter to the data (search is always applied regardless of category)
  return filteredByCategory.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) // Apply search filter
  );
};

// Reducer to handle search, filter by category, and asc/dsc sort
function reducer(state: any, action: Action) {
  switch (action.type) {
    case 'SET_SEARCH_TEXT': {
      const filteredDataWithSearch = filterAndSearchData(state.items, state.currentFilter, action.payload);
      const sortedData = sortData(filteredDataWithSearch, state.sortOrder);
      return {
        ...state,
        searchText: action.payload,
        filteredData: sortedData,
      };
    }

    case 'SET_FILTER': {
      const filteredDataWithSearchForFilter = filterAndSearchData(state.items, action.payload, state.searchText);
      const sortedData = sortData(filteredDataWithSearchForFilter, state.sortOrder);
      return {
        ...state,
        currentFilter: action.payload,
        filteredData: sortedData,
      };
    }

    case 'TOGGLE_SORT': {
      const sortedDataAfterToggle = sortData(state.filteredData, !state.sortOrder);
      return {
        ...state,
        filteredData: sortedDataAfterToggle,
        sortOrder: !state.sortOrder,
      };
    }

    default:
      return state;
  }
}

// Custom Hook
const useItemFilter = (items: Item[]) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    items, // Now pass the items to the initial state
  });

  // Runs on mount to ensure data renders
  useEffect(() => {
    dispatch({ type: 'SET_FILTER', payload: Category.All });
  }, []);

  // Handle change search text
  const handleSearch = (text: string) => {
    dispatch({ type: 'SET_SEARCH_TEXT', payload: text });
  };

  // Handle change category filter
  const handleFilterChange = (category: Category) => {
    dispatch({ type: 'SET_FILTER', payload: category });
  };

  // Handle asc/dsc toggle of sorting
  const handleSortToggle = () => {
    dispatch({ type: 'TOGGLE_SORT' });
  };

  return {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
  };
};

export default useItemFilter;
