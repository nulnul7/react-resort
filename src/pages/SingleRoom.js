import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

export class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      imageBcg: defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h4>No Such Room Found...</h4>
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </div>
      );
    }
    const {
      price,
      size,
      capacity,
      pets,
      breakfast,
      description,
      extras,
      images,
    } = room;
    const [imgStart, ...imgDefault] = images;

    return (
      <>
        <StyledHero img={imgStart || defaultBcg}>
          <Banner title={this.state.slug}>
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {imgDefault.map((item, index) => (
              <img src={item} key={index} alt={"room"} />
            ))}
          </div>
        </section>
        <div className="single-room-info">
          <article className="desc">
            <h3>Detail</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: {price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity: {capacity} {capacity > 1 ? "people" : "person"}
            </h6>
            <h6>pet allow : {pets ? "Yes" : "No"}</h6>
            <h6>{breakfast && "free breakfast include"}</h6>
          </article>
        </div>
        <section className="room-extras">
          <h6>Room Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
