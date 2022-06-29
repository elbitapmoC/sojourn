import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  margin-bottom: 9.6rem;
`;

export const FooterParagraph = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
`;

export const FooterLinkImages = styled.img`
  &:not(:last-child) {
    margin-right: 4.8rem;
  }
  &:hover {
    fill: pink;
    cursor: pointer;
  }
`;
