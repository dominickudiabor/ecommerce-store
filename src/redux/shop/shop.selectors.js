import { createSelector } from "reselect";



const selectShop = state => state.shop;

export const selectShopContent = createSelector(
  [selectShop],
  shop => shop.shopContent
);

export const selectContentForPreview = createSelector(
  [selectShopContent] ,
   collections => Object.keys(collections).map(key => collections[key] )
)


export const selectCollection = collectionUrlParam =>
  createSelector(
      [selectShopContent],
     collections => collections[collectionUrlParam]
  );
