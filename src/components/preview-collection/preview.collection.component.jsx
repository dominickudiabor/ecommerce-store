import React from "react";
import { withRouter } from "react-router-dom";
import "./preview.collection.styles.scss";

const PreviewCollection = ({ items, routeName, title, history, match }) => {
  return (
    <div>
        <h1 onClick={() => history.push(`${match.url}/${routeName}`)}>{title}</h1>
      <div className="directory-menu">
        {items.slice(0, 4).map(({ id, imageUrl, name }) => (
          <div key={id} className="preview-item">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            
         
          </div>
       
        ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
