import { Reveal, Tween, SplitChars, ScrollTrigger,  SplitWords } from 'react-gsap';



let percentage = 0
function Vision() {
    const transform = () => {
      const sticky = document.querySelector('.sticky_2')
      const offSetTop = sticky?.parentElement?.offsetTop
      const scrollSection = sticky?.querySelector('.scroll_section')
      
      if(offSetTop !== undefined){
         let value = (((window.scrollY - 330) - offSetTop) / window.innerHeight) * 100
        percentage = value < 0 ? 0 : value > 400 ? 400 : value
      }

      scrollSection?.setAttribute("style",`transform:translate3d(${-(percentage)}vw, 0, 0)`)
    }

  window.addEventListener('scroll',(e) => {
    console.log(window.scrollY )
    transform()
  })


  return (
   <div className="h-full bg-black bg-right-bottom bg-no-repeat bg-contain scroll-smooth bg-vision-bg">
             
      <div className='h-[700vh]'>
        <div className="sticky sticky_2 overflow-hidden top-0 h-[100vh]">
          <div className='absolute top-0 scroll_section h-[100%] w-[700vw] will-change-transform flex'>
               <div className='h-[400vh]'>
                <div className='sticky sticky_1 overflow-hidden w-screen top-0 h-[100vh]'>
                  <div className='absolute h-[100%] w-[400vw] scroll_section_1 will-change-transform flex'>
                     <div  className="bg-no-repeat bg-cover bg-L3">
                      {/* <Reveal>
                        <Tween from={{
                            display:'none'
                        }} to={{
                          display:"flex"
                        }} duration={0} stagger={0.5}> */}
                          <div  className="flex items-center justify-center w-screen h-screen text-white bg-black lg:bg-transparent font-Outfit">
                        <div className="relative flex items-center justify-center h-full">
                          <p className="absolute hidden font-bold opacity-50 top-20 lg:inline-block">~ equal access to financial service</p>
                          <p className="absolute hidden font-bold opacity-25 lg:top-1/4 lg:inline-block">~ seamless networking</p>
                          <p className="absolute  hidden font-bold opacity-25 lg:top-1/4 lg:right-[-13%] lg:inline-block">~ protect personal data</p>
                          <p  className="absolute hidden font-bold opacity-25 left-20 whitespace-nowrap md:top-32 md:inline-block md:text-2xl lg:font-medium  lg:font-mediumlg:inline-block md:left-[63%] lg:bottom-[10%] lg:left-[17%]">~ manage personal data</p>
                          <p className="absolute font-bold opacity-50 top-16 lg:left-[-13%] lg:top-1/4 md:top-[25%] md:left-[6%] md:text-2xl lg:font-medium  ">~ full control</p>
                          <p className="absolute font-bold opacity-20 top-32 right-px md:top-[33%] lg:top-[69%] lg:left-[48%] md:text-2xl lg:font-medium">= p2p payment</p>
                          <p  className="absolute font-bold opacity-50 bottom-40 focus-visible:opacity-100 right-4 lg:left-[-43%] md:left-[61%] md:bottom-[31%] md:text-2xl lg:font-medium lg:top-[47%]">~ financial freedom</p>
                          <p className="absolute font-bold opacity-25 -left-1 bottom-20 lg:top-[69%] whitespace-nowrap lg:left-[89%] md:bottom-[35%] md:text-2xl lg:font-medium">=Identity freedom</p>
                          <p className="absolute font-bold opacity-20 whitespace-nowrap -right-2 bottom-6 lg:bottom-[20%] md:bottom-[15%] md:left-[32%]  md:text-2xl lg:left-[-1%]">=Open finance</p>
                         
                         
                          <ScrollTrigger start={`${percentage}px`} end= {`${percentage}px`}scrub={0.5}>
                            <div className="z-50 flex flex-col items-center justify-center">
                              <Tween from={{
                              opacity: 1
                            }} to={{
                              opacity: 1
                            }} ease="elastic.out(0.1, 0.1)" 
                            stagger={0.5}
                            duration={10}>
                              
                          
                              <SplitWords
                              delimiter="    "
                              wrapper={<div className="text-[48px] text-center font-Outfit font-medium " style={{ fontSize:"40px", display: 'inline-block'}} />}
                            >
                              We want to put the power of Web3 in
                            </SplitWords>
                          </Tween>
                          <Tween from={{
                              opacity: 1
                            }} to={{
                              opacity: 1
                            }} ease="elastic.out(0.1, 0.1)" 
                            stagger={0.5}
                            duration={10}>
                              
                          
                              <SplitWords
                              delimiter="    "
                              wrapper={<div className="text-[48px]  text-center font-Outfit font-medium " style={{ fontSize:"40px", display: 'inline-block'}} />}
                            >
                             the hands of billons, so we created
                            </SplitWords>
                          </Tween>
                           
                            <Tween from={{
                              opacity: 1
                            }} to={{
                              opacity: 1
                            }} ease="elastic.out(0.1, 0.1)" 
                            stagger={0.5}
                            duration={10}>
                              
                            <div className="flex flex-col items-center justify-center">
                              <SplitWords
                              delimiter="    "
                              wrapper={<div className="text-[48px] text-center font-Outfit font-medium " style={{ fontSize:"40px", display: 'inline-block'}} />}
                            >
                             
                              
                             TowneSquare
                             
                            </SplitWords>
                            
                               <img alt='signature' className="transition ease-in delay-1000 bottom-52"  src="/images/signature.svg"/>
                            </div>
                          </Tween>
                            </div>
                          
                          </ScrollTrigger>
                          
                        </div>
                    </div>
                        {/* </Tween>
                      </Reveal> */}
                  </div>
                </div>
              </div>
             
              </div>
              <div className="bg-no-repeat bg-cover bg-L3"> 
              <div className="flex items-center justify-center w-screen h-screen"> 
                <div> 
                  <p className="text-2xl text-center text-white">Envision a future where everyone has</p>
                  <Reveal repeat>
                    <Tween from={{color:'#FFF'}} to={{color:'#FFF'}} duration={4} stagger={0.2} >
                      <SplitChars
                        wrapper={<h1 className="text-[38px] font-Outfit font-medium" style={{ display: 'inline-block' }} />}
                      >
                        finance, informational ,and identity freedom
                      </SplitChars>
                    </Tween>
                  </Reveal>
                </div>
            </div>
            </div>
           
               <div className='flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row'>
              <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                <img className="w-full" src="/images/financial_freedom.svg" alt="financial_freedom"/>
              </div>
              <div>
                <p className="py-2 font-light">With TowneSquare you get</p>
                <div className="py-4">
                  <h1 className="text-3xl ">Financial freedom</h1>
                  <img src="/images/financial_img.png" alt="financial_image"/>
                </div>
                <p className="font-light leading-6 lg:text-xl">
                  Don't like centralized institutions or other third <p>parties mess with your finance?
                  Neither do we</p> 
                  <p> Liberate yourself and seize limitless financial</p><p>opportunities with
                  TowneSquare.</p>
                </p>
              </div>
            </div>
           
           
       

        
            <div className='flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row'>
        <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
          <img className="w-full" src="/images/informational_freedom.svg" alt="financial_freedom"/>
        </div>
        <div>
          <p className="py-2 font-light">With TowneSquare you get</p>
          <div className="py-4">
            <h1 className="text-3xl ">Informational freedom</h1>
            <img src="/images/financial_img.png" alt="financial_image"/>
          </div>
          <p className="font-light leading-6 lg:text-xl">
            Ignite the flow of information and ideas  <p>in a public town square, governed by</p> 
            <p> user-defined rules, liberated from the </p><p>grasp of centralized data managers.</p>
            <p>Explore, share and discover without</p>
            <p>Limitation</p>
          </p>
        </div>
        </div>
         
       
           <div className="flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row">
        <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
          <img className="w-full" src="/images/identity_freedom.svg" alt='identity_freedom'/>
        </div>
        <div>
          <p className="py-2 font-light">With TowneSquare you get</p>
          <div className="py-4">
            <h1 className="text-3xl">Identity freedom</h1>
            <img src="/images/financial_img.png" alt="financial_image"/>
          </div>
          <p className="font-light leading-6 lg:text-xl">
            Embrace the power to shape and <p>cultivate your unique identity and </p> <p> persona.
            Own your verifable history </p>  <p> records, securely stored on decentralized</p>
            <p>ledgers, empowering you to define and </p> <p> express
            yourself authentically.</p>
          </p>
        </div>
        </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision