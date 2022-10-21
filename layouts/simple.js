import {
  useRouter,
} from 'next/router'
import {
  AnimatePresence,
} from 'framer-motion'
import {
  useEffect,
  useState,
} from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import Loading from '~/components/Common/Loading'

const SimpleLayout = ({children}) => {
  const router = useRouter()

  const [
    isLoading,
    setIsLoading,
  ] = useState(false)

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    })

    const startLoading = () => {
      NProgress.start()
      setIsLoading(true)
    }
    const endLoading = () => {
      NProgress.done()
      setIsLoading(false)
    }

    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', endLoading)
    Router.events.on('routeChangeError', endLoading)

    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', endLoading)
      Router.events.off('routeChangeError', endLoading)
    }
  }, [])

  return (
    <>
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        exitBeforeEnter
      >
        <div key={router.pathname}>
          {children}
        </div>
      </AnimatePresence>
      {isLoading && <Loading />}
    </>
  )
}

export default SimpleLayout
