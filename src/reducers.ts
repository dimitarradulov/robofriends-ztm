import { Reducer } from 'redux';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from './constants';
import { Action } from './models/action.model';

interface GeneralState {
  [field: string]: any;
}

const initialStateSearch = {
  searchField: '',
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: null,
};

const defaultAction = { payload: '', type: '' };

export const searchRobots: Reducer<GeneralState, Action> = (
  state = initialStateSearch,
  action = defaultAction
) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots: Reducer<GeneralState, Action> = (
  state = initialStateRobots,
  action = defaultAction
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
