import React from 'react';
import { Segmented } from './segmented'; // imports 
import { SegmentProps } from './types/SegmentProps';

const SegmentedControl: React.FC<SegmentProps> = ({ handleFilterChange, currentFilter, values}) => {
  return(
    <Segmented 
      handleFilterChange={handleFilterChange}
      currentFilter={currentFilter}
      values={values}
    />
  )
}

export default SegmentedControl;