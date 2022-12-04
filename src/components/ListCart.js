import React from "react"
import { useSelector } from "react-redux"
import { selectListById } from "../redux/listSlice"
import {
  ListCartContainer,
  ImageCart,
  InfoContainer,
  Heart,
} from "../core-Ui/ListCartStyled"
import heart from "../assets/images/heart.gif"
import death from "../assets/images/death.gif"
import male from "../assets/images/human-male.svg"
import female from "../assets/images/human-female.svg"
const ListCart = ({ userId }) => {
  const list = useSelector((state) => selectListById(state, userId))

  return (
    <ListCartContainer>
      <ImageCart src={list.image}>
        {list.status === "Alive" ? (
          <Heart src={heart} alt='Alive' />
        ) : (
          <Heart src={death} alt='death' />
        )}
      </ImageCart>
      <InfoContainer>
        <h1>
          {list.name}
          {list.gender === "Male" ? (
            <img src={male} alt='male' />
          ) : (
            <img src={female} alt='female' />
          )}
        </h1>
        <h2>{list.location.name}</h2>
        <span>origin({list.origin.name})</span>
      </InfoContainer>
    </ListCartContainer>
  )
}

export default ListCart
