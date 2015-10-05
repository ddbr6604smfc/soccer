import fetch from 'isomorphic-fetch';

export const RECEIVE_ALL_SEASONS = 'RECEIVE_ALL_SEASONS';
export const receiveAllSeasons = seasons => ({
  type: RECEIVE_ALL_SEASONS,
  seasons,
});

export const requestAllSeasons = () => (dispatch, getState) => {
  if (getState().seasons.length > 0) {
    return Promise.resolve();
  }

  return fetch('https://soccer-proxy.herokuapp.com/soccerseasons')
    .then(response => response.json())
    .then(seasons => dispatch(receiveAllSeasons(seasons)))
    .catch(err => {
      console.log('caught error fetching seasons', err); // eslint-disable-line
    });
};
