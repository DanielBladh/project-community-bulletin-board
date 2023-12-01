// NavbarStyles.js
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #2f4050;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .header-title {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }

    h1 {
      margin: 0;
      font-size: 1.5em;
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
