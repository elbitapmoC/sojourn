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
`;

export const CollectionItem = styled.div`
  display: flex;
  padding-right: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &:nth-child(2n) {
    padding-right: 0%;
    padding-left: 10%;
    align-items: flex-end;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LinkBlockImageProject = styled.a`
  opacity: 1;
  will-change: transform;
  transform: translate3d(0px, -0.369vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;
  max-width: 100%;
  display: inline-block;
`;

export const LinkHeadingProject = styled.a`
  opacity: 1;
  will-change: transform;
  transform: translate3d(0px, -0.2952vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;
  max-width: 550px;
  margin-top: 32px;
  text-decoration: none;
`;

export const BlockImageProject = styled.div`
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;
  overflow: hidden;
`;

export const ImageProject = styled.img`
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;
  max-height: 70vh;
  object-fit: cover;
`;

export const HeadingProject = styled.h5`
  margin-bottom: 0px;
  text-transform: uppercase;
}`;

export const HeadingInfo = styled.h5`
  margin-top: 2px;
  margin-bottom: 0px;
  font-family: Taviraj, sans-serif;
  font-style: italic;
  font-weight: 200;
  text-transform: uppercase;
`;
