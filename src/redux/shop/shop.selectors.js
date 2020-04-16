import { createSelector } from "reselect";



const selectShop = state => state.shop;

export const selectShopContent = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectContentForPreview = createSelector(
  [selectShopContent] ,
   collections =>collections?  Object.keys(collections).map(key => collections[key] ):[]
)


export const selectCollection = collectionUrlParam =>
  createSelector(
      [selectShopContent],
     collections =>collections?  collections[collectionUrlParam]:null
  );

  export const selectIsCollectionFetching =  createSelector(
    [selectShop],
    shop => shop.isFetching
  )
