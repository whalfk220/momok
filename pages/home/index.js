import Transition from '~/components/Common/Transition'
import HomeComponent from '~/components/Home'

const Home = ({
  eggs,
}) => (
  <Transition>
    <HomeComponent eggs={eggs} />
  </Transition>
)

Home.getInitialProps = async () => {
  // TODO: 달걀 갯수 가져오기
  const eggs = 2

  return {
    eggs,
  }
}

export default Home
