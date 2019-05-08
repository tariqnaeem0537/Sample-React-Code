/* eslint no-case-declarations: 0 */
import {prepareData} from 'utils/users';
import {action as actionType} from './consts';

export default function UsersTableReducer(state, action) {
  switch (action.type) {
    case actionType.sort:
      return {
        ...state,
        ...action.payload, // order & orderBy
      };

    case actionType.order_by:
      return {
        ...state,
        orderBy: action.payload,
      };

    case actionType.page:
      return {
        ...state,
        page: action.payload,
      };

    case actionType.received_data:
      return {
        ...state,
        isLoading: false,
        data: prepareData(action.payload),
      };

    case actionType.select:
      return {
        ...state,
        selected: action.payload,
      };

    case actionType.select_all:
      return {
        ...state,
        selected: action.payload,
      };

    case actionType.update_user:
      const data = state.data.map(user => {
        if (user.userId === action.payload.userId) {
          return prepareData([action.payload])[0];
        }
        return user;
      });

      return {
        ...state,
        data,
      };

    case actionType.toggle_filters:
      return {
        ...state,
        showFilters: action.payload,
      };

    case actionType.filter_service:
      const {service} = state.filters;

      let newService = [];
      if (service.includes(action.payload)) {
        newService = service.filter(f => f !== action.payload);
      } else {
        newService = [...service, action.payload];
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          service: newService,
        },
      };

    case actionType.filter_construct:
      const {construct} = state.filters;
      let newConstruct = [];
      if (construct.includes(action.payload)) {
        newConstruct = construct.filter(f => f !== action.payload);
      } else {
        newConstruct = [...construct, action.payload];
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          construct: newConstruct,
        },
      };
    case actionType.error:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
