import {
  useRouter,
} from 'next/router'

import {
  HeaderWrap,
  HeaderBtn,
  HeaderBtnIcon,
  Title,
} from '~/styles/restaurant/add/header'

const Header = () => {
  const router = useRouter()

  const handleClickHeaderBtn = () => {
    router.back()
  }

  return (
    <HeaderWrap>
      <HeaderBtn onClick={handleClickHeaderBtn}>
        <HeaderBtnIcon icon="prev" />
      </HeaderBtn>
      <Title>추가하기</Title>
    </HeaderWrap>
  )
}

export default Header
