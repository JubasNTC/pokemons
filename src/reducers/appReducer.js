import {
  SET_ABILITY_INFO,
  CLEAR_POKEMONS_LIST,
  SET_LOADING,
  SET_FAILED_REQUEST,
  SET_POKEMON_DETAILED_INFO,
  SET_POKEMONS_LIST,
} from '../actions/app';

const initialState = {
  pokemons: [],
  pokemonInfo: null,
  abilityInfo: null,
  appReady: false,
  isLoading: false,
  isError: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_POKEMONS_LIST:
      return {
        ...state,
        pokemons: [],
      };

    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemons: state.pokemons.concat(payload),
      };

    case SET_POKEMON_DETAILED_INFO:
      return {
        ...state,
        pokemonInfo: payload,
      };

    case SET_ABILITY_INFO:
      return {
        ...state,
        abilityInfo: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case SET_FAILED_REQUEST:
      return {
        ...state,
        isError: payload,
      };

    default:
      return state;
  }
};

export { appReducer };
