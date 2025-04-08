import { DanceCardType } from '../types/types';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const SET_FILTER = 'SET_FILTER';

export function addCard(card: DanceCardType) {
  return { type: ADD_CARD, card };
}

export function removeCard(name: string) {
  return { type: REMOVE_CARD, name };
}

export function toggleLike(name: string) {
  return { type: TOGGLE_LIKE, name };
}

export function setFilter(filter: 'all' | 'hasLike') {
  return { type: SET_FILTER, filter };
}
