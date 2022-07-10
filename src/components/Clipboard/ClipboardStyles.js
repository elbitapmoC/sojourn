export const AboutButton = styled.a`
  margin-top: var(--space_500);
  border: 3px solid black;
  padding-top: var(--space_300);
  padding-bottom: var(--space_300);
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: var(--fs_300);
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.background1};
  background-color: ${(props) => props.theme.colors.brightRed};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};
  }
`;
