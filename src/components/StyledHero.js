import styled from "styled-components";
import imgBackup from "../images/room-10.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : imgBackup)});
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
