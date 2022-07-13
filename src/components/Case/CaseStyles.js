import styled from "styled-components";

export const CollectionList = styled.aside`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 80px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  padding-top: 16rem;
`;

export const CollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageContainer = styled.aside`
  width: 960px;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
