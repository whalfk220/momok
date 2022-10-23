import styled from "styled-components";

  const InputBox = styled.input`
    border: 1px solid #FE724C;
    border-radius: 15px;
    height: 65px;
    line-height: 65px;
    color: #000;
    width: 100%;
    padding:10px;
    box-sizing:border-box;
  `;

  const TextBtn = styled.button`
    margin-top: 27px;
    border-radius: 100px;
    height: 65px;
    line-height: 65px;
    font-size:24px;
    font-weight:700;
    color: ${(props) => (props.off ? "#c4c4c4" : "#FE724C")};
    border: 1px solid ${(props) => (props.off ? "#c4c4c4" : "#FE724C")};
    padding: 0 30px;
    background: #ffffff;
    width: 100%;
    display: ${(props) => (props.block ? "block" : "inline-block")};
  `;
  

  const BtnBox = styled.button`
    width:149px;
    border-radius: 100px;
    height: 60px;
    line-height: 60px;
    font-size: 15px; 
    letter-spacing: 0.08em;
    color: ${(props) => (props.off ? "#FE724C" : "#ffffff")};
    border: 1px solid #FE724C;
    background: ${(props) => (props.off ? "#ffffff" : "#FE724C")};
    display: ${(props) => (props.block ? "block" : "inline-block")};
    margin: ${(props) => (props.block ? "10px auto" : "0")};
  `;
  
  const IconBox = styled.div`
    width:80px;
    height:80px;
    border-radius:14px;
    box-shadow:0 0 0 0 raba(0,0,0,0.5);
    box-shadow: 9px 9px 15px 0px rgba(0,0,0,0.1);
  `
  const Qtext = styled.p`
    font-weight: 350;
    font-size: 31px;
    line-height: 120%;
    text-align: center;
    color: #FE724C;
  `

const PriceBox = styled.span`
width:165px;
height:48px;
display:inline-block;
line-height:48px;
padding:0 15px;
border: 1px solid #EBF0FF;
border-radius: 5px;
box-sizing:border-box;
`
  

  
  export {BtnBox,TextBtn,InputBox,IconBox,Qtext,PriceBox};