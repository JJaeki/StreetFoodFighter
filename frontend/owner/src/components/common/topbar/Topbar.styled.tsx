import styled, { css } from 'styled-components';

const BackButton = styled.div`
  display: flex;
  width: 30%;
  padding-left: 20px;
`;
const StyledTopbar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;
    const lightgray = props.theme.colors.gray;
    return css`
      display: flex;
      flex-direction: row;
      background-color: ${white};
      height: 55px;
      align-items: center;
      justify-content: flex-start;

      font-size: 24px;
      width: 100%;

      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
    `;
  }};
`;
const Text = styled.div`
  width: 40%;
  text-align: center;
`;

export { BackButton, StyledTopbar, Text };
