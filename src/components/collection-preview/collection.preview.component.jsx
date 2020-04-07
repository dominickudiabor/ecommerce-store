import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {  CollectionPreviewContainer,Title,PreviewContainer} from './collection-preview.styles'

const CollectionPreview = ({ items, title ,history,match,routeName}) => (
  <CollectionPreviewContainer >
    <Title  onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</Title>

    <PreviewContainer >
      {items
        .filter((item,idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item = {item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
