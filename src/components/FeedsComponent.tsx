import * as React from "react";
import RouteComponentProps from "react-router-dom";
import { Dispatch } from "redux";
import StoreState, { Feed } from "store/storeState";

interface IFeedProps extends RouteComponentProps<any> {
  readonly getFeed: () => (dispatch: Dispatch<StoreState>) => Promise<void>;
}

export default class FeedsComponent extends React.Component<IFeedProps> {
  componentDidMount() {
    this.props.getFeeds();
  }
  public render() {
    if (this.props.feeds.loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        {this.props.feeds.feeds &&
          this.props.feeds.feeds.feeds &&
          this.props.feeds.feeds.feeds.map<void>(feed => {
            return (
              <div>
                <h3>{feed.title}</h3>
                <p>{feed.body}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
