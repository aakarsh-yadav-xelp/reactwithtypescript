import * as React from "react";
import * as styles from "./Image.css"

interface props  {
  imageUrl: string;
}

export default class Image extends React.Component<props, {}> {
  render() {
    return (
      <div className={styles.base}>
        <img
          className={styles.image}
          src={this.props.imageUrl}
          alt={this.props.imageUrl}
        />
      </div>
    );
  }
}
