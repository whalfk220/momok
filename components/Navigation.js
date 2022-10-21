import {
  useEffect,
  useState,
} from 'react'
import Link from 'next/link'
import {
  useRouter
} from 'next/router'
import _ from 'lodash'

import {
  StyledNav,
  StyledLink,
  StyledIcon,
} from '~/styles/navigation/navigation'

const Navigation = () => {
  const router = useRouter()
  const [
    navigation,
    setNavigation,
  ] = useState([
    {
      path: '/home',
      icon: 'home',
      isActive: false,
    },
    {
      path: '/favorite',
      icon: 'heart',
      isActive: false,
    },
    {
      path: '/user',
      icon: 'user',
      isActive: false,
    },
    {
      path: '/history',
      icon: 'history',
      isActive: false,
    },
  ])

  useEffect(() => {
    setNavigation(_.map(navigation, nav => {
      nav.isActive = nav.path === router.pathname

      return nav
    }))
  }, [router.pathname])

  return (
    <StyledNav>
      {
        _.map(navigation, nav => (
          <Link
            href={nav.path}
            key={nav.path}
            passHref
          >
            <StyledLink
              className={nav.isActive && 'active'}
            >
              <StyledIcon
                icon={nav.icon}
                className={
                  (nav.icon === 'home' || nav.icon === 'heart') && 'outlined'
                }
              />
            </StyledLink>
          </Link>
        ))
      }
    </StyledNav>
  )
}

export default Navigation
