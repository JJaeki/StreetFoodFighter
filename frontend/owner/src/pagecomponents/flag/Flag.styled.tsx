import styled, { css } from 'styled-components';

const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 10px;
`;

const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 24px;
  gap: 20px;

  justify-content: center;

  padding: 20px 0px;
`;

const FlagList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-bottom: 60px;
  /* max-height: 800px; */
  height: calc(100vh - 210px);
  overflow-y: auto;
`;
export { TabBox, PageTitle, FlagList };
