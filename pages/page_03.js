import Transition from "~/components/Common/Transition";
import Header from "~/components/Common/Header";
import Footer from "~/components/Common/Footer";
import LoginComponent from "~/components/Login";
import Content from "~/components/Common/Content";

const Page_02 = () => {
  return (
    <Transition>
      <Header icon="icon icon-chicken" />
      <Content>
        <LoginComponent
          title="이름 입력"
          subtitle="더 이상 뭐먹을지 고민하지 마세요!"
        />
      </Content>
      <Footer />
    </Transition>
  );
};

export default Page_02;
