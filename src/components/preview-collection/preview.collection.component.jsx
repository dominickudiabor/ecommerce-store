import React from "react";
import { withRouter } from "react-router-dom";
import "./preview.collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ items, routeName, title, history, match }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);

