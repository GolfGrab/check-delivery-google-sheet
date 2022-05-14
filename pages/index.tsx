import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import FormSection from '../components/FormSection'
import OrderList from '../components/OrderList'
import TitleSection from '../components/TitleSection'
import mockOrders from '../public/mock/mockOrder'

const Home: NextPage = () => {
  const [orders, setOrders] = useState([])

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center py-[3rem]">
      {/* head data */}
      <>
        <Head>
          <title>Dracula Code</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={''}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </>

      <TitleSection />

      <FormSection setOrders={setOrders} />

      <div>
        อัปเดตล่าสุด วันที่ {mockOrders[4][4]} เวลา {mockOrders[4][6]}
      </div>
      <OrderList mockOrders={mockOrders} />
    </div>
  )
}

export default Home
