// // eslint-disable-next-line no-unused-vars
// import React from 'react'

// const LandingPage = () => {
//   return (
//     <div className="flex justify-center items-start">
//       <div className='m-5 mt-16 p-5 w-1/2'>
//         <div className='text-xl'>Welcome To Asowin</div>
//         <div className='pt-4 text-5xl font-bold'>Get Paid for Installing Apps Instantly</div>
//         <div className='pt-5 text-2xl'>Whether you are a student, a parent, or anyone in between, our platform offers a simple way to boost your income.</div>
//         <button className='mt-10 w-52 h-12 rounded-full bg- bg-[#F3B03D] text-xl font-bold'>Earn Money</button>
//       </div>
//       <div className='w-1/2 p-10'>
//         <img className='rounded-lg' src="https://s3-alpha-sig.figma.com/img/ae76/649a/12124d9d98e90a210c22b03283b01355?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ovH9jxNpvH9UME60fS5UpmxFarKpfmvH6HgXyY1DVaN2FrAozET7xPopSWN7iHCX1xyf7zqnhQvN93ie~VMrUyAgYAK2vH3XHgC4zIGM7GOZKlSN1005KjxhOIoW~~-hesdD0QM8Wh0FVJmLQESgS7chAO8CaoZ8SjwPTRuFMnLjKs2c9P49tfxGik3YJCRWUBkcmGjhrvCri0225tTW5y1dUtDqsmEExmGwzymSRCfaXZqXmkIBC05-tMV15MVn9EMWVwsO1cGr-0oKCXCyjIi8A4wv-5t8ULN3CcAtPglluEMdnO4~jS1ngsadxSaDmxCMGj5EQvT3zY0foRKCTw__" alt="" />
//       </div>
//     </div>
//   )
// }

// export default LandingPage

import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="TextContainer">
        <p className="WelcomeText">Welcome To Asowin</p>
        <p className="Description">
          <strong>Get Paid for Installing Apps Instantly</strong>
          <br />
          Whether you are a student, a parent, or anyone in between, our platform offers a simple way to boost your income.
        </p>
        <button className=' EarnMoneyButton
                py-2
                mt-4  
                px-7
                font-semibold 
                border-[#F3B03D] 
                border-2 
                rounded-full 
                text-black 
                bg-white 
                hover:bg-[#F3B03D]
                hover:text-white'
                >Earn Money</button>
      </div>
      <div className="ImageContainer">
        <img className="img" src="https://s3-alpha-sig.figma.com/img/ae76/649a/12124d9d98e90a210c22b03283b01355?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ovH9jxNpvH9UME60fS5UpmxFarKpfmvH6HgXyY1DVaN2FrAozET7xPopSWN7iHCX1xyf7zqnhQvN93ie~VMrUyAgYAK2vH3XHgC4zIGM7GOZKlSN1005KjxhOIoW~~-hesdD0QM8Wh0FVJmLQESgS7chAO8CaoZ8SjwPTRuFMnLjKs2c9P49tfxGik3YJCRWUBkcmGjhrvCri0225tTW5y1dUtDqsmEExmGwzymSRCfaXZqXmkIBC05-tMV15MVn9EMWVwsO1cGr-0oKCXCyjIi8A4wv-5t8ULN3CcAtPglluEMdnO4~jS1ngsadxSaDmxCMGj5EQvT3zY0foRKCTw__" alt="" />
      </div>
    </div>
  );
}

export default LandingPage;
