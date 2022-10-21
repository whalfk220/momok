import Head from 'next/head'

import DefaultLayout from '~/layouts/default'

import '~/styles/common/common.css'

const MyApp = ({ Component, pageProps }) => (
  <DefaultLayout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <Component
      {...pageProps}
    />
  </DefaultLayout>
)

export default MyApp
