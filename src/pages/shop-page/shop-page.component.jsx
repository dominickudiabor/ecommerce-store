import React from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionOverview from "../../components/collections-overview/collections.overview.component";
import CollectionPage from "../collectionpage/collection-page.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshopToMap,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshop = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({loading:false})
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading} = this.state;
    return (
      <div>
        <Route exact path={`${match.path}`} render ={(props) =>  <CollectionOverviewWithSpinner isLoading = {loading} {...props}/>} />
        <Route
          path={`${match.path}/:collectionId`}
         render = {(props) => <CollectionPageWithSpinner isLoading = {loading} {...props}/>}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
