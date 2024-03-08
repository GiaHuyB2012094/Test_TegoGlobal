import { dataRange } from "../../data"
import RangeCard from "./RangeCard"

const Range = () => {
  return (
    <div className="h-[800px] px-[140px] py-[55px] flex flex-col gap-12">
       <div className="flex flex-col items-center gap-2">
            <p className="text-[32px] text-primary-black capitalize font-bold">Browse The Range</p>
    
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>

      
        <div className="flex items-center justify-between ">
            {dataRange.map((range, idx) => (
                <RangeCard
                    key={idx}
                    imgI={range.imgI}
                    text={range.title}
                />
            ))}
        </div>
    </div>
  )
}

export default Range
