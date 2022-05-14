import React, { useRef } from 'react'

function FormSection(props: { setOrders: any; allOrders: any }) {
  const ref = useRef<any>('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const Username = ref.current.value
    if (Username) {
      // console.log(Username)
      const orders = props.allOrders.filter((order: any, index: number) => {
        return order[2] === Username || index < 10
      })
      props.setOrders(orders)
      // console.log(orders)
    }
  }

  return (
    <>
      <p className=" mb-[0.75rem] text-center">
        กรุณากรอก
        <span className="mx-1 font-semibold text-indigo-600 underline">
          Twitter Username
        </span>
        เพื่อเช็คออเดอร์ค่ะ
      </p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-full w-10 border border-transparent">
            <div className="z-10 flex h-full w-full items-center justify-center rounded-tl rounded-bl bg-gray-100 text-lg text-indigo-400">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <input
            id="name"
            ref={ref}
            name="name"
            type="text"
            placeholder="Name"
            className="relative w-full rounded  py-2 pr-2 pl-12 text-sm placeholder-gray-400 ring-2  focus:outline-none focus:ring-indigo-600 sm:text-base "
          />
        </div>
        <button
          className="my-[0.75rem] h-full w-full rounded-md bg-[#977fd7] py-2 px-4 font-bold text-white transition-colors duration-150 ease-in-out hover:bg-purple-600 focus:outline-none  focus:ring focus:ring-purple-300 focus:ring-opacity-40"
          type="submit"
        >
          ตรวจสอบ
        </button>
      </form>
    </>
  )
}

export default FormSection
