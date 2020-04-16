import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContentForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection.preview.component";
import {CollectionOverviewContainer}  from "./collections-overview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer >
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectContentForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
