import styled, { css } from 'styled-components';

const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Content = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const lightgray = props.theme.colors.lightgray;

    return css`
      display: flex;
      background-color: ${lightgray};
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 125px);
    `;
  }};
`;
const VendorBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;

    return css`
      display: flex;
      background-color: ${white};
      flex-direction: row;
      padding: 10px 15px;
      gap: 15px;
    `;
  }};
`;

const VendorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const VendorName = styled.div`
  font-size: 18px;
`;
const Location = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const gray = props.theme.colors.gray;

    return css`
      font-size: 14px;
      color: ${gray};
    `;
  }};
`;

export { TopBox, Title, Content, VendorName, VendorBox, VendorInfo, Location };
