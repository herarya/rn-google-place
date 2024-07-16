import {IPlace} from '../../../utils/interfaces';

export type PropsType = {
  /**
   * function select recent places
   */

  onPressItem: (item: IPlace) => void;
};
