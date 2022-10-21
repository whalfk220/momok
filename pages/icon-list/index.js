import axios from 'axios'
import Transition from '~/components/Common/Transition'
import Icon from '~/components/Common/Icon'
import styled from 'styled-components'
import Link from 'next/link'

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin: 0 auto 5px;
  font-size: 30px;
  text-align: center;
  display: block;
`

const Icons = ({
  icons,
}) => (
  <Transition>
    <h3 style={{textAlign: 'center'}}>
      Icon List
    </h3>
    <Link href="/">Go home</Link>
    <div style={{
      padding: 30,
      display: 'flex',
    }}>
      {icons.map(icon => (
        <div
          key={icon}
          style={{
            margin: '10px 20px',
          }}
        >
          <StyledIcon icon={icon} />
          <p>{icon}</p>
        </div>
      ))}
    </div>
  </Transition>
)

Icons.getInitialProps = async () => {
  let response

  try {
    response = await axios.get(`http://localhost:3000/api/icon-list`)
  }
  catch (err) {
    console.log(err)
  }

  const icons = response.data.icons

  return {
    icons,
  }
}

export default Icons
