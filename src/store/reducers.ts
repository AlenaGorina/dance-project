import { combineReducers } from 'redux';
import { ADD_CARD, REMOVE_CARD, TOGGLE_LIKE, SET_FILTER } from './actions';  
import { DanceCardType } from '../types/types';

const initialState = {
  cards: [] as DanceCardType[],
  filter: 'all' as 'all' | 'hasLike',
};

function cards(state = initialState.cards, action: any): DanceCardType[] {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.card];
    case REMOVE_CARD:
      return state.filter((card) => card.name !== action.name);
    case TOGGLE_LIKE:
      return state.map((card) =>
        card.name === action.name ? { ...card, hasLike: !card.hasLike } : card
      );
    default:
      return state;
  }
}

function filter(state = initialState.filter, action: any): 'all' | 'hasLike' {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}


const rootReducer = combineReducers({ cards, filter });

export type RootState = ReturnType<typeof rootReducer>;  
export default rootReducer;
