const CartIntro = () => {
  return (
    <div className="absolute top-[22%] right-[5%] w-[643px] h-[443px] p-[39px] rounded-md bg-sub-blue-1 flex flex-col justify-between">
        <p className="text-primary-black text-base font-medium drop-shadow-xl">New Arrival</p>

        <p className="text-primary font-bold text-[52px]">Discover Our <br/> New Collection</p>

        <p className="text-primary-black text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button 
            className="bg-primary h-[70px] w-[229px] rounded-full text-base font-medium uppercase text-white"
        >
            buy now
        </button>
    </div>
  )
}

export default CartIntro
