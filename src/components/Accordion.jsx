// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="px-40 py-5 text-2xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex bg-[#373737] rounded-t-lg p-5 text-white justify-between w-full"
      >
        <span>{title}</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      {accordionOpen && <div className='bg-[#F3B03D] rounded-b-lg p-5 text-white'>{answer}</div>}
    </div>
  )
}

export default Accordion