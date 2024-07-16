import {GoogleLocationDetailResult} from '../../../services/google-place-service';
import {IPlace} from '../../../utils/interfaces';

export type PropsType = {
  /**
   * string id for google places key
   */
  apiKey: string;
  /**
   * string query for language : default en
   */
  language?: string;
  /**
   * string query for components : default MY to restric by country
   */
  components?: string;
  /**
   * object response google result
   */
  onDetailResult: (result: GoogleLocationDetailResult) => void;
  /**
   * function cancel search location
   */

  onCancel?: () => void;
  /**
   * function select recent
   */

  onPressRecentResult?: (place: IPlace) => void;
};
