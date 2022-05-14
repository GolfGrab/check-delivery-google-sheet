import React from 'react'

function OrderCard(props: any) {
  const { order } = props
  return (
    <div className="m-[1.5rem]   w-[20rem] rounded-xl border-4  border-[#ffbcb7]   bg-[#fcfce2] p-[1rem] px-[1.5rem] shadow-lg shadow-[#ffbcb7]/80 transition ease-in hover:scale-105">
      <div className="flex  w-full items-center justify-between">
        <div className="opacity-70">
          {order[0]} , {order[1]}
        </div>
        <div>
          <img
            src={
              'https://www.svgrepo.com/show/395740/like-award-favorite-star.svg'
            }
            className="h-[2rem] w-[2rem]"
          />
        </div>
      </div>
      {order[3] && (
        <div>
          <div className="font-semibold">
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
        </div>
      )}
      {order[4] && (
        <div>
          <div className="text-sm">
            โน๊ต :
            {order[4].split('\n').map((item: any, index: number) => {
              return <p key={order.join(item + index * -3)}> {item}</p>
            })}
          </div>
        </div>
      )}
      {order[5] && (
        <div>
          <div className="text-sm">ประเภทการชำระเงิน : {order[5]}</div>
        </div>
      )}
      {order[6] && (
        <div>
          <div className="text-sm">ค้างชำระ : {order[6]} บาท</div>
        </div>
      )}
      {order[7] && (
        <div>
          <div className="text-sm">
            การจัดส่ง : {order[7] === 'TRUE' ? ' จัดส่งแล้ว' : ' ยังไม่จัดส่ง'}
          </div>
        </div>
      )}
      {order[8] && (
        <div>
          <div className="text-sm">หมายเลข Track :{order[8]}</div>
        </div>
      )}
      {order[9] && (
        <div>
          <div className="text-sm">
            สถานะออร์เดอร์ :
            {order[9] === 'TRUE' ? ' สำเร็จแล้ว' : ' ยังไม่สำเร็จ'}
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderCard
