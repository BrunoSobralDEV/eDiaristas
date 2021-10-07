import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInterface.style";

const UserInformation = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled />
      <UserName>Akira</UserName>
      <RatingStyled />
      <UserDescription />
    </UserInformationContainer>
  );
};

export default UserInformation;
