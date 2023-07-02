import { Dispatch } from 'react';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from './constants';
import { Action } from './models/action.model';

type SearchFieldFunction = (text: string) => Action;

export const setSearchField: SearchFieldFunction = (text: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots =
  () => (dispatch: Dispatch<{ type: string; payload?: any }>) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch((err) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
  };
