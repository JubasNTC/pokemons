import { axios } from '../app/axiosConfig';

export const APP_READY = 'APP_READY';
export const SET_POKEMONS_LIST = 'SET_POKEMONS_LIST';
export const SET_LOADING = 'SET_LOADING';

export const setAppReady = () => ({
  type: APP_READY,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setPokemonsList = (pokemons) => ({
  type: SET_POKEMONS_LIST,
  payload: pokemons,
});

export const loadPokemons = async (dispatch, offset) => {
  dispatch(setLoading(true));
  try {
    const {
      data: { results },
    } = await axios({
      method: 'GET',
      url: `/pokemon?limit=20&offset=${offset}`,
    });
    dispatch(setPokemonsList(results));
    return Promise.resolve(results);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    dispatch(setAppReady());
    dispatch(setLoading(false));
  }
};