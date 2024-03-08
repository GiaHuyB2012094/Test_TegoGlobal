const ImageCollection = ({img1, img2, img3}) => {
  return (
    <div className="h-[472px] flex items-center justify-between gap-[41px]">
        <img 
            src={img1} 
            alt={img1}
            className="w-[355] h-[434] mt-[90px]"
        />

        <img 
            src={img2} 
            alt={img2}
            className="w-[355] h-[434]"

        />

        <img 
            src={img3} 
            alt={img3}
            className="w-[355] h-[434] mt-[90px]"

        />
    </div>
  )
}

export default ImageCollection
