import { APP_READY, SET_LOADING, SET_POKEMONS_LIST } from '../actions/app';

const initialState = {
  pokemons: [],
  appReady: false,
  isLoading: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_READY:
      return { ...state, appReady: true };

    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemons: state.pokemons.concat(payload),
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
};

export { appReducer };
