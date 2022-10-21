//import { useState } from "react";
import Transition from "~/components/Common/Transition";
import Header from "~/components/Common/Header";
import Footer from "~/components/Common/Footer";
import LoginComponent from "~/components/Login";
import Content from "~/components/Common/Content";
const Page_01 = () => {
  return (
    <Transition>
      <Header icon="icon icon-chicken" />
      <Content>
        <LoginComponent
          title="핸드폰번호입력"
          subtitle="뭐 먹을지 고민될때  MOMOK 을 사용해보세요!"
        />
      </Content>
      <Footer />
    </Transition>
  );
};

export default Page_01;
