import Transition from '~/components/Common/Transition'
import SimpleLayout from '~/layouts/simple'

const AddRestaurant = () => (
  <Transition>
    Add Restaurant
  </Transition>
)

AddRestaurant.getLayout = page => <SimpleLayout>{page}</SimpleLayout>

export default AddRestaurant
