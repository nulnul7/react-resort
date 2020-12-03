import React, { Component } from "react";
import { FaBeer, FaHiking, FaShuttleVan, FaCocktail } from "react-icons/fa";
import Title from "../components/Title";

export default class Featured extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Welcome Drink",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      },
      {
        icon: <FaHiking />,
        title: "Enjoy the wild Nature",
        info:
          "Wake up is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Pickup and serve you",
        info:
          "Delivery you Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      },
      {
        icon: <FaBeer />,
        title: "Free Flow Beer",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article className="service" key={item.title}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
