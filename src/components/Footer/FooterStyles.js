import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--space_500);
  padding-right: var(--space_500);
  margin-bottom: var(--space_800);
  margin-top: var(--space_500);

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
  }
`;

export const FooterParagraph = styled.p`
  font-size: var(--fs_500);
  margin-top: var(--space_400);
`;

export const FooterLinkImages = styled.img`
  &:not(:last-child) {
    margin-right: var(--space_600);
  }
  &:hover {
    fill: pink;
    cursor: pointer;
  }
`;
