import Transition from "~/components/Common/Transition";
import Header from "~/components/Common/Header";
import JoinComponent from "~/components/Login";
import Content from "~/components/Common/Content";

const Page_02 = () => {
  return (
    <Transition>
      <Header icon="icon icon-chicken" />
      <Content>
        <JoinComponent
          title="이름 입력"
          subtitle="더 이상 뭐먹을지 고민하지 마세요!"
        />
      </Content>
    </Transition>
  );
};

export default Page_02;
