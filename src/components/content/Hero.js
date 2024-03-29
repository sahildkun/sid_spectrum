import React,{useState} from 'react'
import spectrum from '../../images/output-onlinepngtools1.png'
import women from '../../images/jhia.png'
import { NavLink } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
function Hero() {

  const [isOpen, setOpen] = useState(false)

  function handleToggle(){

    setOpen((prevState) => (!prevState));
  }
  return (
    <div className='' id=''>

    {/* NAVBAR */}
    <div className=" relative container mx-auto p-6 ">
        {/* flex container */}
        <div className='flex items-center justify-between'>
          <div className=''>
       <img src={spectrum} alt="img"  className='h-[] w-[]'/>
    </div>

         <div className=' hidden md:flex flex-auto justify-end space-x-5 items-center' id='cyber'>
            
            <NavLink to={'/user'}>
            <button className='text-white font-cyberian demo transition ease-in-out  hover:text-[#DA493D] hover:translate-y-1 hover:scale-110 duration-300'>LOGIN</button>
            </NavLink>
            <NavLink to={'/register'}>
            <button className='text-white font-cyberian demo transition ease-in-out hover:text-[#DA493D] hover:translate-y-1 hover:scale-110 duration-300'>REGISTER</button>
            </NavLink>
            
         </div>

         {/* hamburger menu */}
         <div className='block hamburger md:hidden'>
         <Hamburger  onToggle={handleToggle}/>
         </div>
         
         </div>
         {/* MOBILE MENU */}
           <div className='md:hidden'>

            {isOpen &&
           <div id="menu" className="absolute flex flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-[#303636]/30 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <NavLink to={'/user'} className='text-white' id='cyber'>LOGIN</NavLink>
          <NavLink to={'/register'} className='text-white' id='cyber'>REGISTER</NavLink>
          </div>}
           </div>

         

         {/* hero section */}


         <section>
          <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-14 md:mt-36 gap-11 md:space-x-[8rem] md:space-y-0 md:flex-row'>
            {/* left item */}
            {/* left flexbox */}
            <div className='flex flex-col '>
                <div className=''>
                     <h1 id='cyber' className='text-lg text-[#B6B6B6] text-center    md:text-5xl md:text-left md: md: max-w-[50rem] '>SPECTRUM INTERNSHIP DRIVE 2022 </h1>
                       <p className=' text-[0.6rem] text-center text-[#CAC9C9] mt-7 max-w-[500px] md:text-left md:text-[1rem]' id='jmh'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum coLorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ac sit interdum commodo convallis sit orci. Leo, et id duis luctus.mmodo convallis .
                      </p>
                </div>
              {/* EXPLORE BUTTONS */}
             <div className='flex flex-row mt-10 space-x-7'>
               <button id='cyber' className='border border-[#DA493D] px-2 py-2 text-white md:font-[400] md:py-5 md:px-10 bg-[#DA493D] hover:bg-[#531e1a]' >EXPLORE</button>
               <button id='cyber' className='border border-[#ffff] text-sm   md:text-lg w-56 md:w-auto text-white font-[400] py-1 px-10 hover:bg-[#531e1a]' >VIEW BROCHURE</button>
             </div>    
             </div>
   
             {/* right image */}
              <div className=''>
                <img src={women} alt="women"  className='md:mb-20 md:ml-20 w-[40rem] h-[30rem]'/>
               
              </div>

          </div>


          {/* space to check scroll */}

          <div className=' mt-36 md:mt-96'>

          </div>
         </section>
        
    </div>
    </div>
  )
}

export default Hero