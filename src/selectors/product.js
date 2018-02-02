import _ from "lodash";
import { createSelector } from "reselect";

export const selectProduct = (products, id) => {
  const product = products.filter(product => product.id === parseInt(id))[0];
  return product;
};
