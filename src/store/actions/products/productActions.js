import * as actionType from "./prodActionType";

export const addProduct = (produit) => ({
     type: actionType.ADD_PRODUCT,
     payload: produit,
});
export const addListProduct = (produits) => ({
     type: actionType.ADD_LIST_PRODUCT,
     payload: produits,
});
export const modProduct = (produit) => ({
     type: actionType.UPDATE_PRODUCT,
     payload: produit,
});
export const delProduct = (id) => ({
     type: actionType.DELETE_PRODUCT,
     payload: id,
});
export const effacerProducts = () => ({
     type: actionType.CLEAR_PRODUCT_LIST,
});
// export const delProduct = (id) => ({
//      type: actionType.DELETE_PRODUCT,
//      payload: { id },
// });
