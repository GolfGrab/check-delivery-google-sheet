import React from 'react'
import StatusIcon from './StatusIcon'

function OrderCard(props: any) {
  const { order } = props
  return (
    <div className="m-[1.5rem] w-[20rem] rounded-xl border-4 border-[#ffbcb7]  bg-[#fcfce2]   p-[1rem] px-[1.5rem] text-sm shadow-lg shadow-[#ffbcb7]/80 transition ease-in hover:scale-105">
      {/* date and time */}
      <div className="flex w-full  items-center justify-between text-base">
        <div className="opacity-70">
          {order[0]} , {order[1]}
        </div>
        <StatusIcon order={order} />
      </div>

      {/* order details */}
      {order[3] && (
        <>
          <div className="text-base font-semibold">
            รายละเอียดสินค้า : <br />
            {order[3].split('\n').map((item: any, index: number) => {
              return (
                <div key={order.join(item + index)} className="text-sm">
                  - {item}
                </div>
              )
            })}
          </div>
          <br />
        </>
      )}

      {/* order note */}
      {order[4] && (
        <div>
          โน๊ต :
          {order[4].split('\n').map((item: any, index: number) => {
            return <p key={order.join(item + index * -3)}> {item}</p>
          })}
          <br />
        </div>
      )}

      {/* order pay method */}
      {order[5] && <div>ประเภทการชำระเงิน : {order[5]}</div>}

      {/* order pay status */}
      {order[6] && (
        <div className={order[6] != '0' ? 'text-red-500' : 'text-green-500'}>
          ค้างชำระ : {order[6]} บาท
        </div>
      )}

      {/* order shipping status */}
      {order[7] && (
        <div className={order[7] != 'TRUE' ? 'text-red-900' : 'text-green-500'}>
          การจัดส่ง : {order[7] === 'TRUE' ? ' จัดส่งแล้ว' : ' ยังไม่จัดส่ง'}
        </div>
      )}

      {/* order shipping track */}
      {order[8] && (
        <div className="text-green-500">หมายเลข Track : {order[8]}</div>
      )}

      {/* order status */}
      {order[9] && (
        <div className={order[9] != 'TRUE' ? 'text-red-900' : 'text-green-500'}>
          สถานะออร์เดอร์ :
          {order[9] === 'TRUE' ? ' สำเร็จแล้ว' : ' ยังไม่สำเร็จ'}
        </div>
      )}
    </div>
  )
}

export default OrderCard
