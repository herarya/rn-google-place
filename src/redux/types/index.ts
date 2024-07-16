import places from '../reducers/places';
import {store} from '../store';

type ReduxPlacesType = ReturnType<typeof places>;
export type ReduxStoreType = ReturnType<typeof store.getState> & {
  places: ReduxPlacesType;
};
