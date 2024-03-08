const BenefitCard = ({ imgI, title, desc}) => {
  return (
    <div className="w-[337px] h-[55px] flex items-center  gap-[26px]">
        <img
            src={imgI}
            alt={imgI}
            className="w-[84px] h-[50px]"
        />

        <div className="flex flex-col gap-2">
            <p className="font-medium text-primary-black text-2xl">{title}</p>

            <p className="">{desc}</p>
        </div>
    </div>
  )
}

export default BenefitCard
