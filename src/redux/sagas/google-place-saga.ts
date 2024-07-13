// action types
const FETCH_GOOGLE_PLACE_REQUEST = 'FETCH_GOOGLE_PLACE_REQUEST';
const FETCH_GOOGLE_PLACE_SUCCESS = 'FETCH_GOOGLE_PLACE_SUCCESS';
const FETCH_GOOGLE_PLACE_FAILURE = 'FETCH_GOOGLE_PLACE_FAILURE';

export const fetchGooglePlaceRequest = () => ({
  type: FETCH_GOOGLE_PLACE_REQUEST,
});

export const fetchGooglePlaceSuccess = (places: any) => ({
  type: FETCH_GOOGLE_PLACE_SUCCESS,
  payload: places,
});
export const fetchGooglePlaceFailure = (error: any) => ({
  type: FETCH_GOOGLE_PLACE_FAILURE,
  payload: error,
});
