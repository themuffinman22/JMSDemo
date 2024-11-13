export const Category = { // cant do enum need at runtime
    All: 'All',
    Bills: 'Bills',
    Food: 'Food',
    Misc: 'Misc',
} as const;

export type Category = typeof Category[keyof typeof Category]; 

export interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    createdAt: string;
  }