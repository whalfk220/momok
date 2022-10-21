import {
  axios,
} from '~/utils'

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
  const eggs = (await axios({
    method: 'GET',
    url: '/api/common/egg',
  })).data.result.egg

  return {
    eggs,
  }
}

export default Home
