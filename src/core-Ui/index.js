import styled from "styled-components"

//Base container of Layout
export const LayoutContainer = styled.div`
  max-width: 87.5rem;
  height: 100vh;
  background-color: var(--indexBack);
  backdrop-filter: blur(4);
  margin: 0 auto;
  display: grid;
  grid-template-rows: 8rem 1fr 4rem;
  border-left: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  @media (width < 87.5rem) {
    width: 100%;
  } ;
`
//Header of Layout
export const LayoutHeader = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  & img {
    height: 100%;
  }
  & h1 {
    font-family: Zen Dots;
  }
  .header__nav {
    margin-left: auto;

    a {
      text-decoration: none;
      margin: 1rem;
    }
  }
`

//Main of Layout that include pages
export const LayoutMain = styled.section`
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 12rem;
  align-content: center;
  grid-gap: 5rem;
  @media (width < 70rem) {
    grid-template-columns: 1fr;
    grid-auto-rows: 12rem;
  }
`

//Footer of Layout
export const LayoutFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.1rem solid var(--borderColor);
  & p {
    color: var(--footerColorFnt);
  }
`
