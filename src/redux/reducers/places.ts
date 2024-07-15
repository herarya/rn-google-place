import {IPlace} from '../../utils/interfaces';
import {
  FETCH_GOOGLE_PLACES,
  FETCH_GOOGLE_PLACES_FAILURE,
  FETCH_GOOGLE_PLACES_SUCCESS,
  PlacesActionTypes,
} from '../sagas/google-place-saga';

export interface IPlacesState {
  isLoading: boolean;
  places: IPlace[];
  error: Error | null;
}

const initialState: IPlacesState = {
  isLoading: false,
  places: [],
  error: null,
};

const placesReducer = (
  state = initialState,
  action: PlacesActionTypes,
): IPlacesState => {
  switch (action.type) {
    case FETCH_GOOGLE_PLACES:
      return {...state, isLoading: true};
    case FETCH_GOOGLE_PLACES_SUCCESS:
      return {...state, isLoading: false, places: action.payload};
    case FETCH_GOOGLE_PLACES_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export default placesReducer;
