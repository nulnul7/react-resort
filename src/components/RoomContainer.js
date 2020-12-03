import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import FilterRoom from "./FilterRoom";
import RoomList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <FilterRoom rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import FilterRoom from "./FilterRoom";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "../components/Loading";

// function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         const { rooms, sortedRooms, loading } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <FilterRoom rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomContainer;
