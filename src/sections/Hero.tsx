import React from 'react'

export default function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-white">
      <h1 className="text-[42px] font-heading font-bold text-textDark tracking-tight leading-tight" data-aos="fade-up">
        Build Fast. Launch Faster.
      </h1>
      <p className="mt-4 text-[20px] text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        High-performance landing pages with beautiful animations and responsive design.
      </p>
      <form className="mt-8 max-w-md mx-auto flex" data-aos="fade-up" data-aos-delay="200">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primaryDark text-white px-6 py-2 rounded-r-md transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}
