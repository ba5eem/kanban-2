export const REMOVE_CARD = 'REMOVE_CARD';
export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_CARD = "ADD_CARD";

export const removeCard = (card) => {
  return{
    type: REMOVE_CARD,
    payload: card
  }
}

export const updateTitle = (newText,card) => {
  card.title = newText;
  return{
    type: UPDATE_TITLE,
    payload: card
  }
}

export const addCard = () => {
  let card = {};
  return{
    type: ADD_CARD,
    payload: card
  }
}