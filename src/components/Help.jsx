// eslint-disable-next-line no-unused-vars
import React from 'react'

const Help = () => {
  return (
    <div className='flex flex-col m-2 md:flex-row gap-20 w-full md:px-40 py-20 '>
        <div className='md:w-1/2 flex bg-[#F3B03D] rounded-lg'>
            <div className='md:w-1/2'>
                <img src="https://s3-alpha-sig.figma.com/img/193f/0f9b/b9c16574b083523ef260e2e0c83ae68a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zy4LdzkQ15KDQhazABJefaHlTVF7tIOfcQ4YeFgyJQiFu7L8msmtuDMRJOba1TZg-rrX2jFdxTAueIYq~ztmReHz79OefIpYT-Cl-fvbNZTE7s-GPP4-1GhafOy-81p6wC5Cr4N7J~Z-FeRxzfLyVKk-3hDiT4Z6zAHLs-ptx-4pz-cf54DZ7vFoDVETipPN1rDJx9RraQ4u0yldBpXnjo2U15aw4p1dLBdFflT7Tc7pljZCV7jISsd4~JvZsGoN-b12~K6RX3zIeONFCbr39VrX--OzxceIBpje197ckhbnLjgJ7tyVjiDmxJCb7ZzRYwwlYBBdtQbnyFK7kibDwA__" alt="image" className='my-10 mx-5 px-5 h-[30vh] ' />
            </div>
            <div className=' md:w-1/2 p-10'>
                <div className='text-3xl font-bold'>Help Center</div>
                <div className='pt-5 text-xl'>Got questions? We have got answers. Check out our for more information.</div>
            </div>
        </div>
        <div className='md:w-1/2 flex bg-[#F3B03D] rounded-lg'>
            <div className='md:w-1/2'>
                <img src="https://s3-alpha-sig.figma.com/img/193f/0f9b/b9c16574b083523ef260e2e0c83ae68a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zy4LdzkQ15KDQhazABJefaHlTVF7tIOfcQ4YeFgyJQiFu7L8msmtuDMRJOba1TZg-rrX2jFdxTAueIYq~ztmReHz79OefIpYT-Cl-fvbNZTE7s-GPP4-1GhafOy-81p6wC5Cr4N7J~Z-FeRxzfLyVKk-3hDiT4Z6zAHLs-ptx-4pz-cf54DZ7vFoDVETipPN1rDJx9RraQ4u0yldBpXnjo2U15aw4p1dLBdFflT7Tc7pljZCV7jISsd4~JvZsGoN-b12~K6RX3zIeONFCbr39VrX--OzxceIBpje197ckhbnLjgJ7tyVjiDmxJCb7ZzRYwwlYBBdtQbnyFK7kibDwA__" alt="image" className='my-10 mx-5 px-5 h-[30vh] ' />
            </div>
            <div className=' md:w-1/2 p-10'>
                <div className='text-3xl font-bold'>Ready to Earn?</div>
                <div className='pt-5 text-xl'>Install the app and upload the screenshot.</div>
            </div>
        </div>
    </div>
  )
}

export default Help