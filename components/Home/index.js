import {
  useEffect,
  useState,
} from 'react'
import {
  PageWrap,
  AddRestaurantBtn,
  ContentBox,
  ContentClickableArea,
  ContentIcon,
  ContentText,
} from '~/styles/home/home'
import {
  useRouter,
} from 'next/router'

const HomeComponent = ({
  eggs,
}) => {
  const router = useRouter()

  const [
    isBreakingEgg,
    setIsBreakingEgg,
  ] = useState(false)
  const [
    myEggs,
    setMyEggs,
  ] = useState(eggs)
  const [
    content,
    setContent,
  ] = useState({
    icon: '',
    message: '',
  })

  const handleClickAddRestaurant = () => {
    router.push('/restaurant/add')
  }

  const eggBreakingAnimation = async () => {
    setContent({
      icon: 'broken-egg',
      message: `...`,
    })
    await new Promise(r => setTimeout(r, 700))
    setContent({
      icon: 'broken-egg',
      message: `....`,
    })
    await new Promise(r => setTimeout(r, 700))
    setContent({
      icon: 'broken-egg',
      message: `.....`,
    })

    await new Promise(r => setTimeout(r, 1200))

    setContent({
      icon: 'fried-egg',
      message: `Wow!`,
    })

    await new Promise(r => setTimeout(r, 1500))

    router.push('/restaurant/recommended')
  }

  useEffect(() => {
    if (myEggs) {
      setContent({
        icon: 'egg',
        message: `Click to eat (${myEggs}/2)`,
      })
    }
    else {
      setContent({
        icon: 'question-egg',
        message: `등록하고 달걀 받기`,
      })
    }
  }, [])

  useEffect(() => {
    if (isBreakingEgg) {
      eggBreakingAnimation()
    }
  }, [isBreakingEgg])

  const handleClickContent = () => {
    if (isBreakingEgg) {
      return
    }

    if (!myEggs) {
      router.push('/restaurant/add')
      return
    }

    if (myEggs) {
      setIsBreakingEgg(true)
      return
    }
  }

  return (
    <PageWrap>
      {
        !isBreakingEgg && myEggs ?
        <AddRestaurantBtn onClick={handleClickAddRestaurant}>
          등록하고 달걀 받기
        </AddRestaurantBtn>
        : <></>
      }

      <ContentBox>
        <ContentClickableArea
          onClick={handleClickContent}
        >
          <ContentIcon
            icon={content.icon}
            className={ isBreakingEgg && 'shaking' }
          />
          <ContentText>
            {content.message}
          </ContentText>
        </ContentClickableArea>
      </ContentBox>
    </PageWrap>
  )
}

export default HomeComponent
