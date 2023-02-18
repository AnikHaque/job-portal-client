import React from 'react';

const FAQ = ({ children, title }) => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl text-teal-500 font-bold">FAQ</h1>
          <p className="py-6">FAQ page continue to be a priority area for SEO and digital marketing professionals.</p>

          <p className="py-6">An FAQ page is one of the simplest ways to improve your site and help site visitors and users.</p>

          <p className="py-6">Your FAQ section should be seen as a constantly expanding source of value provided to your audience. It is a place where their ever-changing and growing requirements are not only met but anticipated and exceeded frequently.</p>

          <p className="py-6" >In no small part, the importance of FAQ pages has been driven in recent years by the growth in voice search, mobile search, and personal/home assistants and speakers.</p>

        </div>
      </div>
    </div>
    );
};

export default FAQ;