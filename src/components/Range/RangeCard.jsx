
const RangeCard = ({imgI, text}) => {
  return (
    <div className="w-[381px] flex flex-col items-center gap-5 font-medium">
      <img
        src={imgI}
        alt={text}
        className="w-[381px] h-[480px]"
      />

      <p className="text-primary-black text-2xl">{text}</p>
    </div>
  )
}

export default RangeCard
