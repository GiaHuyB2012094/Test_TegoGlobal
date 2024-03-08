import { dataImgCollection } from "../../data"
import ImageCollection from "./ImageCollection"

const Collection = () => {
  return (
    <div className="px-[120px] py-[66px] flex items-center justify-center flex-col gap-5">
        <p className="font-bold text-4xl text-primary-black">Inspiration Collection</p>

        <p className="text-xl text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
        <ImageCollection
            img1={dataImgCollection[0]}
            img2={dataImgCollection[1]}
            img3={dataImgCollection[2]}
        />
    </div>
  )
}

export default Collection
