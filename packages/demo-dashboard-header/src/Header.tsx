import styled from "@emotion/styled";

const Wrapper = styled.header`
  padding: 20px;
  background-color: gray;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>Demo Dashboard</Title>
    </Wrapper>
  );
};

export default Header;
