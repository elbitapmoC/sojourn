import React from "react";
import {
  CollectionList,
  CollectionItem,
  Project,
  LinkBlockImageProject,
  BlockImageProject,
  ImageProject,
  LinkHeadingProject,
  HeadingProject,
  HeadingInfo,
} from "./CaseStyles";

const Case = () => {
  return (
    <CollectionList>
      <CollectionItem>
        <Project>
          <LinkBlockImageProject>
            <BlockImageProject>
              <ImageProject
                src="https://assets.website-files.com/6268ab50c4204d8e5d08d993/6268b03467b8b0279708b0c3_Project_1.jpg"
                loading="eager"
                alt="Porträt einer Dame (1916-1917)"
              />
            </BlockImageProject>
          </LinkBlockImageProject>

          <LinkHeadingProject href="/project/portrat-einer-dame-1916-1917">
            <HeadingProject className="">
              Porträt einer Dame (1916-1917)
            </HeadingProject>
            <HeadingInfo>Gustav Klimt</HeadingInfo>
          </LinkHeadingProject>
        </Project>
      </CollectionItem>
      <CollectionItem>
        <Project>
          <LinkBlockImageProject>
            <BlockImageProject>
              <ImageProject
                src="https://assets.website-files.com/6268ab50c4204d8e5d08d993/6268b0133995de774f07ae0b_Project_2.jpg"
                loading="eager"
                alt="Porträt einer Dame (1916-1917)"
              />
            </BlockImageProject>
          </LinkBlockImageProject>

          <LinkHeadingProject href="/project/portrat-einer-dame-1916-1917">
            <HeadingProject className="">
              Porträt einer Dame (1916-1917)
            </HeadingProject>
            <HeadingInfo>Gustav Klimt</HeadingInfo>
          </LinkHeadingProject>
        </Project>
      </CollectionItem>
      <CollectionItem>
        <Project>
          <LinkBlockImageProject>
            <BlockImageProject>
              <ImageProject
                src="https://assets.website-files.com/6268ab50c4204d8e5d08d993/6268b03467b8b0279708b0c3_Project_1.jpg"
                loading="eager"
                alt="Porträt einer Dame (1916-1917)"
              />
            </BlockImageProject>
          </LinkBlockImageProject>

          <LinkHeadingProject href="/project/portrat-einer-dame-1916-1917">
            <HeadingProject className="">
              Porträt einer Dame (1916-1917)
            </HeadingProject>
            <HeadingInfo>Gustav Klimt</HeadingInfo>
          </LinkHeadingProject>
        </Project>
      </CollectionItem>
      <CollectionItem>
        <Project>
          <LinkBlockImageProject>
            <BlockImageProject>
              <ImageProject
                src="https://assets.website-files.com/6268ab50c4204d8e5d08d993/6268b03467b8b0279708b0c3_Project_1.jpg"
                loading="eager"
                alt="Porträt einer Dame (1916-1917)"
              />
            </BlockImageProject>
          </LinkBlockImageProject>

          <LinkHeadingProject href="/project/portrat-einer-dame-1916-1917">
            <HeadingProject className="">
              Porträt einer Dame (1916-1917)
            </HeadingProject>
            <HeadingInfo>Gustav Klimt</HeadingInfo>
          </LinkHeadingProject>
        </Project>
      </CollectionItem>
    </CollectionList>
  );
};

export default Case;
