const WorkCard = ({imgI, title, desc}) => {
  return (
    <div className="w-[381px] flex flex-col items-center gap-5 text-center">
        <img
            src={imgI}
            alt={title}
            className="w-[381px] h-[445px]"
        />

        <p className="text-primary-black text-2xl font-medium">{title}</p>
        
        <p className="text-[#666666] text-lg">{desc}</p>
    </div>
  )
}

export default WorkCard
