import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPlace} from '../../utils/interfaces';

export interface IPlacesState {
  recentPlaces: IPlace[];
}

const initialState: IPlacesState = {
  recentPlaces: [],
};

const slice = createSlice({
  name: 'place',
  initialState: initialState as IPlacesState,
  reducers: {
    addRecentPlace: (state, action: PayloadAction<IPlace>) => {
      const {placeId} = action.payload;
      const isExist = state.recentPlaces.find(item => item.placeId === placeId);
      if (!isExist) {
        state.recentPlaces.push(action.payload);
      }
    },
  },
});

export const {addRecentPlace} = slice.actions;
export default slice.reducer;
