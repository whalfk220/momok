import styled from "styled-components";

const BtnBox = styled.button`
  margin-top: 27px;
  border-radius: 100px;
  height: 65px;
  line-height: 65px;
  color: ${(props) => (props.off ? "#fe742c" : "#ffffff")};
  border: 1px solid #fe742c;
  padding: 0 30px;
  background: ${(props) => (props.off ? "#ffffff" : "#fe742c")};
  width: 100%;
  display: ${(props) => (props.block ? "block" : "inline-block")};
`;

const Btn = ({ children }) => (
  <>
    <BtnBox>{children}</BtnBox>
  </>
);

export default Btn;
