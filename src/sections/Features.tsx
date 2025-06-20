const Features = () => {
  return (
    <section className="px-6 py-20 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {['Fast Development', 'Responsive Design', 'Smooth Animations'].map((text, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-md"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3 className="text-xl font-heading font-bold mb-2">{text}</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quos.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
