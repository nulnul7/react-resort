import React, { Component } from "react";
import Room from "./Room";
import { RoomContext } from "../Context";

export class Dondong extends Component {
  static contextType = RoomContext;
  render() {
    const { salak } = this.context;
    return (
      <div>
        <h4>Haloo dari Dondong</h4>
        <Room salak={salak} />
      </div>
    );
  }
}

export default Dondong;
