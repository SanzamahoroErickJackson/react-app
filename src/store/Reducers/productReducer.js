import { useEffect, useState } from "react";
import * as actionType from "../actions/products/prodActionType";

const productReducer = (state = [], action) => {
     switch (action.type) {
          case actionType.ADD_PRODUCT:
               return [...state, action.payload];
          case actionType.ADD_LIST_PRODUCT:
               console.log("New data: ", action.payload);
               return state.concat(action.payload);
          case actionType.UPDATE_PRODUCT:
               return state.map((p) =>
                    p.id === action.payload.id
                         ? [
                                ...state,
                                (p.image = action.payload.image),
                                (p.title = action.payload.title),
                                (p.description = action.payload.description),
                           ]
                         : p
               );
          case actionType.DELETE_PRODUCT:
               return state.filter((p) => !action.payload.includes(p.id));
          case actionType.CLEAR_PRODUCT_LIST:
               return [];

          // p.id !== id
          // case actionType.DELETE_PRODUCT:
          //      return state.filter((p) => p.id !== action.payload.id);
          default:
               return state;
     }
};

export default productReducer;
