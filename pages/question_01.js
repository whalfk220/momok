import Transition from "~/components/Common/Transition";
import Header from "~/components/Common/Header";
import Footer from "~/components/Common/Footer";
import Content from "~/components/Common/Content";
import Btn from "~/components/Common/Button";

const Question_01 = () => {
  return (
    <Transition>
      <Header icon="icon icon-chicken" />
      <Content>
        <Btn>네,맵찔이에요</Btn>
        <Btn>그냥 휴먼 수준?</Btn>
        <Btn>아닌데요?</Btn>
      </Content>
      <Footer />
    </Transition>
  );
};

export default Question_01;
