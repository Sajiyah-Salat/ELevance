import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
<>
<footer className=" flex flex-col md:flex-row  justify-between mt-20 ml-20 mr-20 gap-10 text-white py-8">
      <div className='flex-col justify-between '>

           
                <Image 
                  src="/favicon.png" 
                  alt="Logo" 
                  width={150}
                  height={150} 
                  priority 
                />
             <p className='mt-8 mb-8 text-[11px] font-extralight'>Elevance is a decentralized super app and web3’s largest onchain distribution platform.</p>
           <div className='gap-3 flex whitespace-nowrap justify-between'>
           <button className='font-extralight pl-3 pr-3 mr-5 bg-[#CC5920] text-white rounded-full text-xs p-2'>Hire a Talent</button>
           <button className='font-extralight pl-3 pr-3 bg-[#CC5920] text-white rounded-full text-xs p-2'>Find a Job</button>
           </div>


      </div>
      <div className="container ">
        <div className="grid grid-cols-1 whitespace-nowrap sm:grid-cols-2 md:grid-cols-4 md:gap-44 gap-10">
          <div>
            <h6 className=" mb-4 text-[11px] font-bold">We Work With</h6>
            <ul className="space-y-2 whitespace-nowrap text-[10px] font-extralight">
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior  href="/about"><a>Programming and Development</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/services"><a>Design & UI/UX</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Database Technologies</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Cloud Computing and DevOps</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Artificial Intelligence and Machine Learning</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Cybersecurity</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Blockchain & Web 3.0 Technologies</a></Link></li>


            </ul>
          </div>

          <div>
            <h6 className=" mb-4 text-[11px] font-bold">For Сompanies </h6>
            <ul className="space-y-2 whitespace-nowrap text-[10px] font-extralight">
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior  href="/about"><a>Hire a developer</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/services"><a>Hire a designer</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Hire a team </a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Turnkey product</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Consultation</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>How we work </a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>How much can you save?</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Сase studies and partners</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Pricing</a></Link></li>



            </ul>
          </div>       
            <div>
            <h6 className=" mb-4 text-[11px] font-bold">For Talent</h6>
            <ul className="space-y-2 whitespace-nowrap text-[10px] font-extralight">
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior  href="/about"><a>Overview</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/services"><a>How to get hired</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Benefits</a></Link></li>
              <li className='hover:text-[#CC5920]' ><Link  legacyBehavior href="/contact"><a>Become a Contributor</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Remote jobs</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>Remote companies</a></Link></li>
            </ul>
          </div>    
               <div>
            <h6 className=" mb-4 text-[11px] font-bold">Info</h6>
            <ul className="space-y-2 whitespace-nowrap text-[10px] font-extralight hover">
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior  href="/about"><a>About Us</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/services"><a>Pricing</a></Link></li>
              <li className='hover:text-[#CC5920]'><Link  legacyBehavior href="/contact"><a>How we work</a></Link></li>



            </ul>
          </div>
        </div>

      </div>
      
    </footer>

<div className="mt-8 ml-20 mr-20 mb-3 flex flex-col md:flex-row   justify-between">
<div className='flex justify-between gap-5 text-[10px] text-gray-500'>
  <p>support@elevanceit.com</p>
  <p>Terms of Service</p>
  <p>Privacy Policy</p>

</div>
  <div>
  <p className='text-[10px] text-gray-500'>&copy; {new Date().getFullYear()} ELEVANCE LTD. All rights reserved.</p>
  </div>
        </div>
</>
  );
};

export default Footer;