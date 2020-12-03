import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";

function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="start from $299">
          <Link to="/rooms" className="btn-primary">
            Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}

export default Home;
