"use client";
import Image from "next/image";
import Head from 'next/head';
export default function Home() {
  const benefits = [
    {
      id: "01",
      title: "High Quality Talent",
      description: `Our IT professionals are recognized for their technical excellence and attention to detail, excelling in various fields like software development, mobile app creation, UI/UX design, and system architecture. Many of them are also well-versed in the latest industry trends and technologies such as AI, blockchain, and cloud computing. Their ability to work with cutting-edge tools and methodologies ensures that projects are executed to the highest standards.`,
    },
    {
      id: "02",
      title: "Cost-Effective",
      description: `Our developers and designers provide the same level of expertise and deliver high-quality results at significantly lower rates. For businesses, this can lead to reduced operational costs while maintaining access to top-tier professionals. Furthermore, the availability of freelance and contract work options offers additional flexibility for companies looking to optimize their budgets.`,
    },
    {
      id: "03",
      title: "Time Zone",
      description: `Our professionals work within the Eastern European Time Zone (GMT+2), which overlaps considerably with both European and U.S. time zones. This makes real-time collaboration and communication easier during working hours. Teams can schedule meetings, provide updates, and make decisions without the delays caused by large time differences.`,
    },
    {
      id: "04",
      title: "Scalability",
      description: `Whether a business requires a few specialists for a short-term project or an entire dedicated team to handle long-term work, our workforce provides the flexibility needed to adjust to fluctuating demands. Startups and large corporations alike can benefit from the ability to quickly hire additional resources or reduce team size without compromising on quality. This scalability is particularly useful for companies in fast-paced industries that need to adapt to changes in project scope or business growth.`,
    },
    {
      id: "05",
      title: "Access to a Diverse Talent Pool",
      description: `The diversity of our specialists is another significant advantage. We have professionals with expertise in a wide range of fields, including front-end and back-end development, mobile app development, UI/UX design, data science, cybersecurity, and DevOps. This broad range of talent allows companies to find the right fit for their specific project requirements, ensuring that they can access exactly the expertise they need.`,
    },
  ];
  return (
    <>
          <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
          <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
      </Head>
<div style={{ fontFamily: 'Montserrat, sans-serif' }} >
      <div className=" bg-black text-white flex flex-col md:flex-row justify-between items-center px-10  ">
        <div className="space-y-20 mb-10 ">
          <div className="flex items-center gap-4">
            <Image 
              src="/Line2.png" 
              alt="Line 2" 
              width={200} 
              height={200} 
              className="object-contain" 
              priority 
            />
            <Image 
              src="/Line1.png" 
              alt="Line 1" 
              width={200} 
              height={200} 
              className="object-contain" 
              priority 
            />
          </div>

          <div>
            <Image 
              src="/heroText.png" 
              alt="Hero Text" 
              width={500} 
              height={500} 
              className="object-contain" 
              priority 
            />
          </div>

          <div className="max-w-md">
            <p className="text-gray-300 text-lg">
              We deliver complex IT solutions through a curated network of top-tier specialists
            </p>
          </div>

          <div className="flex space-x-6">
            <button className='border border-white/50 rounded-full px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
              Hire a Talent
            </button>
            <button className='border border-white/50 rounded-full px-4 py-2 text-sm hover:bg-white/10 transition-colors'>
              Find a Job
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Image 
            src="/hero.png" 
            alt="Hero Image" 
            width={900} 
            height={900} 
            className="object-contain" 
            priority 
          />
        </div>
      </div>

      <div className="bg-black text-white py-16">
        <p className=" text-xl m-10">Trusted by the industry's leading brands</p>
        
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="inline-block px-8 text-2xl font-bold">
                {i % 2 === 0 ? 'Google' : 'Amazon'}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 m-20">
        <div className="container flex flex-col md:flex-row  flex-wrap text-center">
          {[
            { value: '100,000', label: 'Active Talents' },
            { value: '10,000', label: 'Projects' },
            { value: '1,000+', label: 'Partners' }
          ].map((stat, index) => (
            <div key={index} className=" border-[1px] border-gray-900 p-36 flex flex-col ">
              <p className="text-5xl font-extralight">{stat.value}</p>
              <h6 className="text-sm text-start text-gray-400">{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
<div>
  <h1 className="gradient-text m-20 text-2xl">Want to Work With Us? Here Is How</h1>
</div>

<div className="bg-transparent hover:bg-[#9097A61A] transition-all  flex flex-col md:flex-row  m-20 gap-5 justify-between">
 <div >
 <h1 className="text-white text-xl">How to Get Started work with Us</h1>
  <p className="text-gray-600 pt-6 pb-6">We help you find top talent in 72 hours or less.Each candidate is carefully assessed by independent experts with experience at top companies.</p>
  <p className="text-gray-600">Our platform goes beyond recruitment, offering complete solutions, from branding and design to advanced AI technologies, bringing your vision to life with the latest innovations.</p>
  <p className="text-gray-600 pt-6"><span className="text-white">| 100K</span> Verified Talents</p>
 </div>
 <div>
 <Image 
              src="/WORK.png" 
              alt="Hero Text" 
              width={600} 
              height={600} 
              className="object-contain md:mt-3 md:mb-3 mt-10 mb-10" 
              priority 
            />
 </div>
</div>

<div className="m-20 flex flex-col md:flex-row  justify-between">
  <div className=" bg-transparent hover:bg-[#9097A61A] transition-all  filter p-5 border-[1px] border-gray-900 grayscale flex flex-col items-center hover:grayscale-0 ">
    <p><i className="fas fa-arrow-right"></i></p>
    <Image
      src="/solo.png"
      alt="Hero Text"
      width={100}
      height={100}
      className="object-contain"
      priority
    />
    <h1 className="items-start mt-10 mb-10 text-xl text-start">Hire a Single Talent</h1>
    <p className="text-xs text-gray-600 ">
      You can hire a dedicated developer to meet your individual needs, available for various types of work arrangements—including hourly or full-time commitments. Choose the option that suits you best and enjoy flexible collaboration tailored to your project's requirements.
    </p>
  </div>
  <div className="bg-transparent hover:bg-[#9097A61A] transition-all  filter p-5 border-[1px] border-gray-900 grayscale flex flex-col items-center hover:grayscale-0 ">
    <p><i className="fas fa-arrow-right"></i></p>
    <Image
      src="/group.png"
      alt="Hero Text"
      width={300}
      height={300}
      className="object-contain"
      priority
    />
    <h1 className="mt-10 mb-10 text-xl text-start ">Hire a Team</h1>
    <p className=" items-start text-xs text-gray-600 ">
    We can assemble a whole team of developers for you, ready to fulfill your individual needs. Our team provides a professional approach and flexible collaboration terms, tailored to your project's requirements.
    </p>
  </div>
  <div className="bg-transparent hover:bg-[#9097A61A] transition-all  filter p-5 border-[1px] border-gray-900 grayscale flex flex-col items-center hover:grayscale-0 ">
    <p><i className="fas fa-arrow-right"></i></p>
    <Image
      src="/key.png"
      alt="Hero Text"
      width={300}
      height={300}
      className="object-contain"
      priority
    />
     <h1 className="mt-10 mb-10 text-xl ">Order a Turnkey Solution</h1>
    <p className="text-xs text-gray-600 items-start">
    We can develop any solution or product to suit your needs, offering turnkey services tailored to your specific requirements, and manage it at all stages.
    </p>
  </div>

</div>


<div className="flex flex-col md:flex-row  ">
<div>
<div className=" bg-transparent hover:bg-[#9097A61A] transition-all  filter pt-20 pb-20 p-5 gap-3 border-[1px] border-gray-900 grayscale flex flex-col md:flex-row  items-center hover:grayscale-0 ">
    <p><i className="fas fa-arrow-right"></i></p>
    <Image
      src="/clock.png"
      alt="Hero Text"
      width={100}
      height={100}
      className="object-contain"
      priority
    />
   <div className=" flex-col">
   <h1 className="text-white font-extralight">Hourly Pay</h1>
   <h1 className="md:items-start items-center  mb-3 text-[12px] text-start">Hire an employee and pay by the hour.</h1>
    <p className="text-xs text-gray-600 ">
      You can hire a dedicated developer to meet your individual needs, available for various types of work arrangements—including hourly or full-time commitments. Choose the option that suits you best and enjoy flexible collaboration tailored to your project's requirements.
    </p>
   </div>
  </div>
  <div className=" bg-transparent hover:bg-[#9097A61A] transition-all  filter pt-20 pb-20 p-5 border-[1px] border-gray-900 grayscale flex flex-col md:flex-row  gap-3 items-center hover:grayscale-0 ">
    <p><i className="fas fa-arrow-right"></i></p>
    <Image
      src="/solo.png"
      alt="Hero Text"
      width={100}
      height={100}
      className="object-contain"
      priority
    />
   <div className=" flex-col">
    <h1 className="text-white font-extralight">Hourly Pay</h1>
   <h1 className="items-start  mb-3 text-[12px] text-start">Hire an employee and pay by the hour.</h1>
    <p className="text-xs text-gray-600 ">
      You can hire a dedicated developer to meet your individual needs, available for various types of work arrangements—including hourly or full-time commitments. Choose the option that suits you best and enjoy flexible collaboration tailored to your project's requirements.
    </p>
   </div>
  </div>
</div>
  <div className=" bg-transparent hover:bg-[#9097A61A] transition-all text-white pl-10 pr-10 pt-2">
      <h1 className="text-2xl font-[300] ">Fill the Form</h1>
      <p className="text-gray-500 mb-4 text-xs">
        Galxe Passport securely stores your identity information and allows you to use it across various applications without compromising your privacy, empowering users to take control of their own data.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-white text-[10px]">First Name</label>
          <input
            type="text"
            className="bg-gray-900 text-gray-400 border-[1px] border-gray-900 px-2 py-1 text-[10px] rounded w-full focus:outline-none focus:ring-[1px] focus:ring-[#F08B21]"
            placeholder="First Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-white text-[10px]">Last Name</label>
          <input
            type="text"
           className="bg-gray-900 text-gray-400 border-[1px] border-gray-900 px-2 py-1 text-[10px] rounded w-full focus:outline-none focus:ring-[1px] focus:ring-[#F08B21]"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="my-6">
        <label className="block mb-2 text-white text-[10px]">Email</label>
        <input
          type="email"
        className="bg-gray-900 text-gray-400 border-[1px] border-gray-900 px-2 py-1 text-[10px] rounded w-full focus:outline-none focus:ring-[1px] focus:ring-[#F08B21]"
          
          placeholder="Your email"
        />
      </div>

      <div className="my-6">
        <label className="block mb-2 text-white text-[10px]">What Type of Services You Need</label>
        <select  className="bg-gray-900 text-gray-400 border-[1px] border-gray-900 px-2 py-1 text-[10px] rounded w-full focus:outline-none focus:ring-[1px] focus:ring-[#F08B21]"
        >
          <option value="Select">Select</option>
          <option value="Web Development">Web Development</option>
          <option value="Designing">Designing</option>
        </select>
      </div>

      <div className="my-6">
        <label className="block mb-2 text-white text-[10px]">Describe Your Needs</label>
        <textarea
                     className="bg-gray-900 text-gray-400 border-[1px] border-gray-900 px-2 py-1 text-[10px] rounded w-full focus:outline-none focus:ring-[1px] focus:ring-[#F08B21]"

          rows={5}
          placeholder="Your Needs"
        ></textarea>
      </div>

      <button className="bg-[#F08B21] text-[10px] hover:bg-[#CC5920] text-white px-6 py-1 rounded-full">Submit</button>
    </div>


</div>


<div className="bg-black text-white py-16">
        <p className=" text-xl m-10">Trusted by the industry's leading brands</p>
        
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="inline-block px-8 text-2xl font-bold">
                {i % 2 === 0 ? 'Google' : 'Amazon'}
              </div>
            ))}
          </div>
        </div>
      </div>

 <div>


 <div>
  <h1 className="gradient-text m-20 text-2xl">Why do top companies recruit remote talent from Ukraine?</h1>
</div>


<div className="companyBg">
<div className=" m-10 flex flex-col md:flex-row  gap-10 justify-between border-[1px] p-20 border-gray-700">
      <div>
        <h1 className="whitespace-nowrap text-2xl font-light p-4">
          Benefits of hiring Our IT <br /> specialists
        </h1>
      </div>
      <div className="5companies">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`p-4 border-gray-700 border-l-[1px] ${
              index % 2 === 1 ? "mt-9 mb-9" : ""
            }`}
          >
            <p className="text-[10px] text-white">
              {benefit.id}
              <span className="text-gray-600">/05</span>
            </p>
            <h1 className="text-xl font-light mt-3 mb-3">{benefit.title}</h1>
            <p className="text-[10px] text-gray-500">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>


</div>

 </div>




    </>
  );
}