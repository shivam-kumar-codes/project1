// eslint-disable-next-line no-unused-vars
import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="md:m-40 mb-12">
        <div className="flex justify-center">
            <h1 className="left-50% text-5xl">Frequently Asked Questions</h1>
        </div>
        <div className="mt-10 rounded-lg">
            <Accordion
                title="How does this website work?"
                answer="answer1"
            />
            <Accordion
                title="Is it really possible to ear money by installing apps?"
                answer="answer2"
            />
            <Accordion 
                title="How much can I earn for each app Installation?" 
                answer="answer3" 
            />
            <Accordion 
                title="How do I upload screenshots After installing the app?"
                answer="answer4"
            />
        </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;