import { Category } from "../../../types/Item";

export interface SegmentProps {
  handleFilterChange: (category: Category) => void;
  currentFilter: Category;
  values: string[];
}