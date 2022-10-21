import styled from "styled-components";

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

const Title = (props) => {
  return (
    <>
      <LoginTitle>{props.title}</LoginTitle>
      <LoginP>{props.subtitle}</LoginP>
    </>
  );
};

const IuputStyle = styled.input`
  border: 1px solid #fe742c;
  border-radius: 15px;
  height: 65px;
  line-height: 65px;
  color: #000;
  width: 100%;
`;

const InputBox = (props) => {
  return <IuputStyle type={props.type}></IuputStyle>;
};

const NextBtn = styled.button`
  margin-top: 27px;
  border-radius: 100px;
  height: 65px;
  line-height: 65px;
  color: ${(props) => (props.off ? "#c4c4c4" : "#fe742c")};
  border: 1px solid ${(props) => (props.off ? "#c4c4c4" : "#fe742c")};
  padding: 0 30px;
  background: #ffffff;
  width: 100%;
  display: ${(props) => (props.block ? "block" : "inline-block")};
`;

const LoginComponent = ({ title, subtitle }) => (
  <>
    <Title title={title} subtitle={subtitle} />
    <InputBox type="number" />
    {/* children="NEXT" */}
    <NextBtn block />
  </>
);

export default LoginComponent;
