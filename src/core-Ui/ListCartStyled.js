import styled from "styled-components"

export const ListCartContainer = styled.article`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  position: relative;
  border-right: 0.2rem solid #cc1d86;
  @media (width < 70rem) {
    justify-content: center;
    border: 0;
  }
`
export const ImageCart = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background: url(${(props) => props.src}) no-repeat #e8dfb5 center center;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -ms-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  border: 1px solid var(--borderColor);
  outline: 0.2rem solid;
  outline-offset: 0.2rem;
  outline-color: var(--borderColor);
  position: relative;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  h1 {
    font-size: 3rem !important;
    position: relative;
    img {
      position: absolute;
      width: 2.5rem;
      left: -1.5rem;
      top: -0.6rem;
    }
  }
  h2 {
    font-size: 1.5rem !important;
  }
  span {
    font-size: 1.4rem !important;
    color: var(--subTitleColor);
  }
`
export const Heart = styled.img`
  position: absolute;
  width: 3rem;
  bottom: 0.2rem;
  right: 0;
`
