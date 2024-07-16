import {IPlace} from '../../utils/interfaces';

export type RootStackParamList = {
  Home: undefined;
  SearchLocation: {
    onSelectPlace: (place: IPlace) => void;
  };
};
