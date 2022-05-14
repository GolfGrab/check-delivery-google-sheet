import React from 'react'
import OrderCard from './OrderCard'

export default function OrderList(props: any) {
  // console.log(props.orders)
  const ordersData = props.orders.slice(10, props.orders.length)
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
