import maskGroupImg from '../../assets/Mask Group.jpg'
import CartIntro from './CartIntro'

const Intro = () => {
  return (
    <main className="h-[750px] relative">
      <img
        src={maskGroupImg}
        alt='mask group'
        className='w-full h-full '
      />

      <CartIntro/>
    </main>
  )
}

export default Intro
