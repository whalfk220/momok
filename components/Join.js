import styled from "styled-components";

const Title = (props) => {
  return (
    <>
      <LoginTitle>{props.title}</LoginTitle>
      <LoginP>{props.subtitle}</LoginP>
    </>
  );
};
const LoginTitle = styled.h3`
  color: #fe742c;
  font-size: 36px;
  line-height: 44px;
`;

const LoginP = styled.p`
  color: #9796a1;
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 38px;
`;



const JoinComponent = ({ title, subtitle, children }) => (
  <div>
    <Title title={title} subtitle={subtitle} />
    {children}
  </div>
);

export default JoinComponent;
