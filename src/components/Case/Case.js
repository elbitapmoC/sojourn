import React from "react";
import {
  CollectionList,
  CollectionItem,
  ImageContainer,
  Image,
} from "./CaseStyles";

const Case = ({ content }) => {
  console.log({ content });
  return (
    <>
      <CollectionList>
        {content.map((l, i) => {
          return (
            <CollectionItem>
              <ImageContainer key={i}>
                <Image src={l.src} alt={l.alt}></Image>
              </ImageContainer>
            </CollectionItem>
          );
        })}
      </CollectionList>
    </>
  );
};

export default Case;
