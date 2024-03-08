import { dataBenefits } from "../../data"
import BenefitCard from "./BenefitCard"

const Benefits = () => {
  return (
    <div className=" bg-sub-blue-2 px-[120px] py-[46px] flex items-center justify-between ">
      {dataBenefits.map((benefit, idx) => (
        <BenefitCard
          key={idx}
          title={benefit.title}
          imgI={benefit.imgI}
          desc={benefit.desc}
          // disable={benefit?.disable}
        />
      ))}
    </div>
  )
}

export default Benefits
