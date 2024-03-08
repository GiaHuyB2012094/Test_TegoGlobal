import { dataWork } from "../../data"
import WorkCard from "./WorkCard"

const Works = () => {
  return (
    <div className="min-h-[800px] px-[140px] pt-[55px] pb-48 flex flex-col gap-12 border-t border-solid">
        <div className="flex flex-col items-center gap-2">
            <p className="text-[32px] text-primary-black capitalize font-bold">How it works</p>
    
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="flex items-center justify-between">
            {dataWork.map((work, idx) => (
                <WorkCard
                    key={idx}
                    imgI={work.imgI}
                    title={work.title}
                    desc={work.desc}
                />
            ))}
        </div>
    </div>
  )
}

export default Works
