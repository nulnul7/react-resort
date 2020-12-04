import React, { Component, createContext } from "react";
// import Items from "./data";
import Client from './Contentful'

// Client.getEntries ({
//   content_type: 'beachResortRoom'})
//   .then(response => console.log(response.items))

export const RoomContext = createContext();

export class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    priceMin: 0,
    priceMax: 0,
    sizeMin: 0,
    sizeMax: 0,
    breakfast: false,
    pets: false,
  };

  getData = async () => {
    try {
      let response = await Client.getEntries ({
        content_type: 'beachResortRoom',
        // order: 'sys.createdAt',
        order: "fields.capacity"
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => {
      return room.featured === true;
    });

    let priceMax = Math.max(...rooms.map(item => 
      item.price
    ))

    let sizeMax = Math.max (...rooms.map(room => (
      room.size
    )
      ))
    
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: priceMax,
      priceMax,
      sizeMax
    });
      console.log(response.items)
      

    } catch (error) {
    }
  }

  componentDidMount() {
    this.getData()

  }

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    this.setState({[name]: value}, this.filterRooms)
    console.log(`this is name ${name}, this is value ${value}`)
  }

  filterRooms = () => {
    let {
    rooms, 
    type,
    capacity,
    price,
    sizeMin,
    sizeMax,
    breakfast,
    pets } = this.state;

    let tempRooms = [...rooms]
     capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== 'all'){
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price) 

    //filter by size
    tempRooms = tempRooms.filter(room => room.size >= sizeMin && room.size <= sizeMax)

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(item => (item.pets === true))
    }

    this.setState ({sortedRooms: tempRooms})
  } 

  getRoom = (slug) => {
    // let tempRoom = [...this.state.rooms];
    const room = this.state.rooms.find((temp) => temp.slug === slug);
    return room;
  };

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      let data = { ...item.fields, images, id };
      return data;
    });

    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export const RoomConsumer = RoomContext.Consumer;

export default RoomProvider;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value}/>}

      </RoomConsumer>
    )
  }
}