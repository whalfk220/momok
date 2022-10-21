import Transition from '~/components/Common/Transition'
import SimpleLayout from '~/layouts/simple'

const RecommendedRestaurant = () => (
  <Transition>
    Recommended Restaurant
  </Transition>
)

RecommendedRestaurant.getLayout = page => <SimpleLayout>{page}</SimpleLayout>

export default RecommendedRestaurant
