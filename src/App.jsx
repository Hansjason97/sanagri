import logo from '../src/assets/logo.png'
import {PiPhoneFill} from 'react-icons/pi'
import {TbMailFilled} from 'react-icons/tb'
import preview from '../src/assets/preview.png'
import {AiOutlineDownload} from 'react-icons/ai'

function App() {
  

  return (
    <>
    <div className='w-[100vw] h-[10vh] bg-primary text-white flex justify-center items-center'>
      <a href="https://drive.google.com/file/d/1gxomOV4uujmFBjtP4MdXq_aMn0-9cH2W/view?usp=drivesdk" 
      className='w-full h-full text-2xl flex text-center justify-center items-center gap-2'><AiOutlineDownload size={24}/>Catalogue du Salon</a>
    </div>
    <div className='w-[100vw] h-[90vh] bg-contain bg-no-repeat bg-top' style={{backgroundImage: `url(${preview})`}}>
    </div>
    
    
      {/* <div className='w-[100vw] h-[100vh] flex flex-col gap-4 pt-10 px-3 items-center xl:flex-row xl:justify-center bg-gray-100 text-center xl:text-left xl:pt-0'>
        <img src={logo} alt="logo" className='w-[300px] h-[300px]'/>
        <div className='flex flex-col gap-2 max-w-[600px] items-center xl:items-start'>
          <p className='font-bold text-3xl text-primary xl:text-5xl'>Du 07 au 12 Février 2024</p>
          <p className='font-bold text-2xl text-secondary xl:text-4xl'>Stade Omnisport de Bepanda</p>
          <p className='font-semibold text-2xl'>Agriculteurs ou Coopératives <span className='text-primary'>|</span> Transformateurs ou Industriels 
          <span className='text-primary'> |</span> Institutions & Fonds </p>
          <p className='bg-primary text-white px-4 py-2 text-xl w-fit'><strong>Réservez</strong> vos stands & packages <strong>dès maintenant</strong></p>
          <div className='flex flex-row gap-2 items-center mt-2'><PiPhoneFill className='text-primary' size={30}/>
            <p className='font-bold text-xl xl:text-3xl'>696 10 54 14 / 655 72 87 25</p>
          </div>
          <div className='flex flex-row gap-2 items-center'><TbMailFilled className='text-primary' size={24}/>
            <a href='mailto:contact@sanagri.cm' className='font-bold text-xl xl:text-xl'>contact@sanagri.cm</a>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
