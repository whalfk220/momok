import Transition from '~/components/Common/Transition'

const Loading = () => (
  <Transition>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, .2)',
      backdropFilter: 'blur(1px)',
      position: 'fixed',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      zIndex: 999999,
    }}></div>
  </Transition>
)

export default Loading
