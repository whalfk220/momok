import Head from 'next/head'

import DefaultLayout from '~/layouts/default'

import '~/styles/common/common.css'

const MyApp = ({ Component, pageProps }) => {
  if (!Component.getLayout) {
    Component.getLayout = page => <DefaultLayout>{page}</DefaultLayout>
  }

  const getLayout = Component.getLayout

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component
        {...pageProps}
      />
    </>
  )
}

export default MyApp
