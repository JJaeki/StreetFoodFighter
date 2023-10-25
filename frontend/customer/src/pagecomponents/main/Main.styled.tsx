import styled, { css } from 'styled-components';
const StyledTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 3;
  top: 10px;
  left: 0;
  right: 0;
  gap: 8px;
`;
const Topbar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Filter = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 50px;
      height: 50px;
      background-color: ${main};
      border-radius: 10px;
    `;
  }};
`;
const Research = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-around;

      padding: 10px 20px;
      background-color: ${main};
      border-radius: 10px;

      font-size: 14px;
    `;
  }};
`;

const Position = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const light = props.theme.colors.light;
    const font = props.theme.fonts.air;
    return css`
      background-color: ${light};
      border-radius: 10px;
      height: 50px;
      width: 300px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: ${font};
      font-size: 20px;
    `;
  }};
`;

const Curpos = styled.div`
  z-index: 3;
  position: fixed;
  right: 10px;
  bottom: 70px;
`;

export { StyledTop, Topbar, Filter, Research, Position, Curpos };
