export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export function addToBasket(text) {
    return {type: ADD_TO_BASKET, text}
}
