import { useEffect, useReducer } from 'react';
import { Category, SortCategory, Item } from '../types/Item';

type Action =
  | { type: 'SET_SEARCH_TEXT'; payload: string }
  | { type: 'SET_FILTER'; payload: Category }
  | { type: 'TOGGLE_SORT';payload: SortCategory };

const initialState = {
  searchText: '',
  currentFilter: 'All', // Default
  sortBy: 'PriceDSC',
  filteredData: [] as Item[], // Initial filtered data
  items: [] as Item[],
};

// Helper function for sorting
const sortData = (data: Item[], sortBy: SortCategory): Item[] => {
  return [...data].sort((a, b) => {
    switch(sortBy) {
      case 'PriceASC':
        return b.price - a.price; //sort price by ascending
      case 'PriceDSC':
        return a.price - b.price; //sort date by ascending
      case 'DateASC':
        return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();  // Sort date by asscending 
      case 'DateDSC':
        return new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf();  // Sort date by descending 
      default:
        return a.price - b.price; // default to price ascending
    }
  });
};

// Helper function to filter data by category and search text
const filterAndSearchData = (items: Item[], category: Category, searchText: string): Item[] => {
  // If category is 'All', don't filter by category but apply search
  const filteredByCategory = category === Category.All 
    ? items  
    : items.filter(item => item.category === category);

  return filteredByCategory.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) // Apply search filter
  );
};

// Reducer to handle search, filter by category, and ASC/DSC date or price sort
function reducer(state: any, action: Action) {
  switch (action.type) {
    case 'SET_SEARCH_TEXT': {
      const filteredData = filterAndSearchData(state.items, state.currentFilter, action.payload);
      const sortedData = sortData(filteredData, state.sortBy);
      return {
        ...state,
        filteredData: sortedData,
        searchText: action.payload,
      };
    }

    case 'SET_FILTER': {
      const filteredData = filterAndSearchData(state.items, action.payload, state.searchText);
      const sortedData = sortData(filteredData, state.sortBy);
      return {
        ...state,
        currentFilter: action.payload,
        filteredData: sortedData,
      };
    }

    case 'TOGGLE_SORT': {
      const sortedData = sortData(state.filteredData, action.payload);
      return {
        ...state,
        filteredData: sortedData,
        sortBy: action.payload,
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
  const handleSortToggle = (sortCategory: SortCategory) => {
    dispatch({ type: 'TOGGLE_SORT', payload: sortCategory});
  };

  return {
    state,
    handleSearch,
    handleFilterChange,
    handleSortToggle,
  };
};

export default useItemFilter;
