import superagent from 'superagent';
let API1 = 'http://localhost:3002';
const API = 'https://adventures-back-end-jessi.herokuapp.com' || 'http://localhost:3002';

export const getRemoteData = () => dispatch => {
  return superagent.get(API)
  .then(response => {
    dispatch(getAction(response.body))
  })
}

export const putRemoteData = (id, data) => async dispatch => {
  let response = await (await superagent.put(`${API}/${id}`)).setEncoding(data);
}

export const getAction = data => {
  return {
    type: 'GET',
    payload: data,
  }
}