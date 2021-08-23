import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to bottom, #393543, #393641, #38363f, #38373d, #38373b);
    color: white;
    font-family: "Poppins", sans-serif;
    margin: 0px;
    min-height: 100vh;
    min-width: 100vh;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vh;
  min-height: 100vh;
  padding-left: 4vh;
  padding-right: 4vh;
`;

export const Header = styled.header`
  display: flex;
  height: 10vh;
  background-image: linear-gradient(to right top, #1b1e21, #1b1c1f, #1a1b1c, #19191a, #181818);
  overflow-y: visible;
  box-shadow: 0px 4px 9px 0px rgba(255, 206, 91, 0.67);
`;

export const AppTitle = styled.h1`
  color: white;
  margin: 8px 0px 0px 20px;
  font-family: "Poppins", sans-serif;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100vh;
`;

export const MainContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-width: 100vh;
`;

export const SearchInput = styled.input`
  padding: 10px 15px 10px 5px;
  outline-width: 0;
  border: none;
  border-radius: 5px;
`;

export const MiniButton = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  padding: 10px;
  background-color: #E6C557;
  :hover {
    cursor: pointer;
  }
`;

export const SelectOptions = styled.select`
  background: none;
  background-color: #E6C557;
  border: none;
  border-radius: 5px;
  color: black;
  font-family: "Poppins", sans-serif;
  margin-top: 5px;
  outline-width: 0;
  padding: 5px 15px 5px 10px;
  :hover {
    cursor: pointer;
  }
`;

export const TrackListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 0px;
`;

export const TrackDiv = styled.ul`
  background-image: linear-gradient(to right top, #1b1e21, #1b1c1f, #1a1b1c, #19191a, #181818);
  border-radius: 8px;
  box-shadow: 0px 4px 9px 0px rgba(255, 206, 91, 0.67);
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px;
  width: 100vh;
  :hover {
    box-shadow: 0px 8px 18px 0px rgba(255, 200, 71, 0.829);
    transition: 500ms;
  }
`;

export const TrackInfoGeneral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-right: 15px;
`;

export const TrackInfoEach = styled.p`
  font-size: small;
  min-width: 20vh;
  text-align: center;
  margin-right: 5px;
  img {
    border-radius: 5px;
  }
`;

export const TrackInfoButtons = styled.p`
  display: flex;
  margin-left: 10px;
`;

export const MiniButtonAnchor = styled.a`
  background: none;
  color: black;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #57e663;
  :hover {
    cursor: pointer;
  }
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;