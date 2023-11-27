import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  h1 {
    margin: 0;
    font-size: 1.5em;
  }
`;
