import Transition from "~/components/Common/Transition";
import Header from "~/components/Common/Header";
import Footer from "~/components/Common/Footer";
import Content from "~/components/Common/Content";
import Btn from "~/components/Common/Button";

const Question_02 = () => {
  return (
    <Transition>
      <Header icon="icon icon-chicken" />
      <Content>
        <Btn>상관이에요</Btn>
        <Btn>안되는데요?</Btn>
      </Content>
      <Footer />
    </Transition>
  );
};

export default Question_02;
