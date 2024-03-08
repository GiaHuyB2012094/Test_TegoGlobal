import { dataNav } from "../../data"

const Nav = () => {
  return (
    <main className="h-[122px] px-[120px] flex items-center justify-between">
      <div className="">
        <p className="text-[34px] font-bold text-primary cursor-pointer">Furniture</p>
      </div>

      <div className="flex gap-[75px] items-center">
        {dataNav.map((navI, idx) => 
            <p 
                key={idx} 
                className="font-medium text-[14px] text-primary-black capitalize cursor-pointer hover:text-primary"
            >
                {navI}
            </p>
        )}
      </div>
    </main>
  )
}

export default Nav
