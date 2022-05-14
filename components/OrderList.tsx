import React from 'react'
import OrderCard from './OrderCard'

export default function OrderList(props: any) {
  console.log(props.mockOrders)
  const ordersData = props.mockOrders.slice(11, props.mockOrders.length - 1)
  return (
    <div className="flex flex-wrap items-center justify-center py-[3rem] ">
      {ordersData.map((order: any, index: number) => {
        return (
          <div
            className="flex flex-col items-center justify-center"
            key={order.join(index * -1)}
          >
            <OrderCard order={order} />
          </div>
        )
      })}
    </div>
  )
}
