import React, {useContext} from "react";
import {RoomContext} from '../Context'

const getUnique = (items, value) => {
  return [...new Set (items.map(item => item[value]
  ))]
}

function FilterRoom({ rooms }) {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    priceMin,
    priceMax,
    sizeMin,
    sizeMax,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, 'type')
  types = ['all', ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))

  let capacities = getUnique(rooms, 'capacity')
  capacities = capacities.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))

  return (
    <section className="filter-container">
      <form className="filter-form">

      {/* form Room Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select id="type" name="type" className='form-control' value={type} onChange={handleChange}>
            {types}
          </select>
        </div>

        {/* form capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select id="capacity" name="capacity" value={capacity} className='form-control' onChange={handleChange}>
            {capacities}
          </select>
        </div>

         {/* form price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price} </label>
          <input
            type="range"
            id="price"
            name="price"
            min={priceMin}
            max={priceMax}
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>

        {/* form inputs */}
        <div className='size-inputs'>
          <label htmlFor="roomSize">Room Size</label>
          <input type="number" id="roomSize" name="sizeMin" value={sizeMin} onChange={handleChange} className='size-input'/>
          <input type="number" id="roomSize" name="sizeMax" value={sizeMax} onChange={handleChange} className='size-input'/>
        </div>

        {/* form checkbox */}
        <div className='single-extra'>
          <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
          <label htmlFor="breakfast">Breakfast</label>
          <br/>

          <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
          <label htmlFor="pets">Pets allowed</label>
        </div>
        
      </form>
    </section>
  );
}

export default FilterRoom;
