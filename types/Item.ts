export const Category = { // cant do enum need at runtime
    All: 'All',
    Bills: 'Bills',
    Food: 'Food',
    Misc: 'Misc',
} as const;

export type Category = typeof Category[keyof typeof Category]; 

export const SortCategory = { // cant do enum need at runtime
    PriceASC: 'PriceASC',
    PriceDSC: 'PriceDSC',
    DateASC: 'DateASC',
    DateDSC: 'DateDSC',
} as const;

export type SortCategory = typeof SortCategory[keyof typeof SortCategory]; 

export interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    createdAt: string;
  }