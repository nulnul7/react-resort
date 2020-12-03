import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "../components/Loading";
import Title from "./Title";
import Room from "./Room";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms } = this.context;
    const featured = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    })
    console.log(featured);
    return (
      <section className="featured-rooms">
        <Title title="Featured Room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featured}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
