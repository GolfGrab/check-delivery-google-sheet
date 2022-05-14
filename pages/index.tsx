import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import FormSection from '../components/FormSection'
import OrderList from '../components/OrderList'
import TitleSection from '../components/TitleSection'
import mockOrders from '../public/mock/mockOrder'
import axios from 'axios'

const Home: NextPage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API ?? 'undefined'

  const [orders, setOrders] = useState([])
  const [allOrders, setAllOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchOrders = async () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setAllOrders(res.data.values)
        setIsLoading(false)
        setIsError(false)
        // console.log(res.data.values)
        console.log('fetch data from google sheet')
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
        setIsError(true)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    // console.log('apiUrl', process.env)
    fetchOrders()
  }, [])

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

      <FormSection
        setOrders={setOrders}
        allOrders={allOrders}
        fetchOrders={fetchOrders}
      />

      {/* order section */}
      {!!orders.length && (
        <>
          <div>
            อัปเดตล่าสุด วันที่ {orders[4][4]} เวลา {orders[4][6]}
          </div>
          {orders.length > 10 && (
            <OrderList orders={orders} key={orders.length + orders[10][2]} />
          )}
        </>
      )}
    </div>
  )
}

export default Home
