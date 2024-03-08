import spaceImg from '../../assets/Mask Group (3).png'
const Space = () => {
  return (
    <main className="h-[874px] px-[140px] py-[37px] bg-sub-blue-2 flex items-center justify-between">
      <div className="w-[514px] flex gap-5 flex-col items-start justify-center">
            <p className="text-primary-black capitalize font-bold text-4xl">Beautify Your Space</p>

            <p className="text-[#666666] text-xl">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <button 
                className="bg-primary h-[70px] w-[229px] my-5 rounded-full text-base font-medium uppercase text-white"
            >
                learn more
            </button>
      </div>

      <div className="w-[570px] relative">
        <img 
            src={spaceImg}
            alt={spaceImg}
            className='absolute -top-96 right-[20%] w-[500px] h-[754px] z-10'    
        />

        <div className='absolute -top-48 right-[9%] w-[372px] h-[372px] bg-[#09513B] rounded-full'></div>
      </div>
    </main>
  )
}

export default Space
