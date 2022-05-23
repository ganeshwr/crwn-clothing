import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const showAllStyles = css`
  text-align: center;

  ${Title} {
    cursor: unset;
    font-size: 38px;
  }
`;

export const ShowAll = styled.h2`
  ${({ showAll }) => showAll && showAllStyles}
`;

export const ViewAll = styled(Link)`
  font-weight: 300;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
