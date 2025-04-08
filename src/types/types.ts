export interface DanceCardType {
    name: string;
    description: string;
    image: string;
    hasLike: boolean;
    author: string;
  }
  
  export interface RootState {
    cards: DanceCardType[];
    filter: 'all' | 'hasLike';
  }
  