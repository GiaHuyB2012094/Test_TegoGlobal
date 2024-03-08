import { imgsFooter } from "../../data"

const Footer = () => {
  return (
    <div className="h-[368px] px-[120px] flex py-[43px] justify-between bg-primary">
        <div className="w-[400px]">
            <p className="text-2xl font-bold text-white">Beauty Care</p>

            <p className="text-base text-white pt-10 pb-7">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
            <p className="text-2xl font-bold text-white">Follow Us</p>
        </div>
        
        <div className="w-[763px]">
            <p className="text-2xl font-bold text-white">Instagram Shop</p>
            <div className="flex justify-between py-8">
                {imgsFooter.map((ig,idx) => (
                    <img key={idx} src={ig} alt={ig} className="w-[175px] h-[185px] rounded-sm"/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer
