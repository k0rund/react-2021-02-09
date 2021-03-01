import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS  } from '../constants';
const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};
export default (state = initialState, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    default:
      return state;
  }
};
