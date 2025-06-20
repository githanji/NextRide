import Image from 'next/image';
import styles from '@/styles/animations.module.css'; 
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';


  const logos = [
    { src: '/hero.png', alt: 'Hero' },
    { src: '/honda.png', alt: 'Honda' },
    { src: '/bajaj.png', alt: 'Bajaj' },
    { src: '/tvs.png', alt: 'TVS' },
    { src: '/royalenfield.png', alt: 'Royal Enfield' },
    { src: '/yamaha.png', alt: 'Yamaha' },
    { src: '/ktm.png', alt: 'KTM' },
    { src: '/ather.jpg', alt: 'Ather' },
    { src: '/ola.png', alt: 'Ola Electric' },
    { src: '/revolt.png', alt: 'Revolt' },
    { src: '/ultraviolette.jpg', alt: 'Ultraviolette' },
    { src: '/tork.jpg', alt: 'Tork Motors' },
  ];

export default function Home() {
  
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: '',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: '',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: '',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: '',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="min-h-screen flex flex-col">
      <section>
         <div className="min-h-screen flex flex-col">
      {/* Top nav */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="bg-gray-300 font-bold px-4 py-1">LOGO</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-blue-700 text-sm font-medium">Lorem Ipsum ▾</a>
          <a href="#" className="text-blue-700 text-sm font-medium">Lorem Ipsum ▾</a>
          <a href="#" className="text-blue-700 text-sm font-medium">Lorem Ipsum ▾</a>
        </nav>
        <button className="text-sm border px-4 py-1 rounded-sm font-bold">Sign In</button>
      </header>

      {/* Hero section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Text content */}
        <div className="max-w-lg space-y-6 lg:w-1/2">
          <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
            Nunc euismod ultrices etiam nulla habitasse.
          </p>

          {/* Input + Button */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder=""
              className="border px-4 py-2 rounded w-full"
            />
            <button className="bg-blue-700 text-white px-4 py-2 text-sm rounded">
              Submit →
            </button>
          </div>

          {/* Note */}
          <div className="flex items-center gap-2 text-sm text-blue-600">
              <input type="checkbox" defaultChecked />
              <span>No credit card required!</span>
            </div>

        </div>

        {/* Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 relative">
          <div className="clip-path-triangle">
            <img
              src="/motorbike.jpg"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
      </section>

      {/* SECTION 2: CONTINUED PAGE CONTENT */}
{/* Second page */}
      <section className="flex flex-col md:flex-row p-6 md:p-16 gap-6 bg-white">
        {/* Left Text & Features */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-blue-700 text-sm font-bold mb-2" style={{fontSize:"18px"}}>Lorem ipsum dolor sit</h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 mt-4" style={{fontSize:"35px"}}>
            Lorem Ipsum <br /> Dolor Sit Amet
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base" style={{fontSize:"22px"}}>
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
            Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet.
          </p>

          <div className="space-y-6 mb-6">
            <div className="flex items-start gap-4">
              <Image src="/feature1.jpg" alt="Feature 1" width={80} height={80} className="rounded-md" />
              <p className="text-sm text-gray-800 mt-2 md:text-7xl" style={{fontSize:"22px"}}>
                Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Image src="/feature2.jpg" alt="Feature 2" width={80} height={80} className="rounded-md" />
              <p className="text-sm text-gray-800 mt-2 md:text-xl">
                Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Image src="/feature3.jpg" alt="Feature 3" width={80} height={80} className="rounded-md" />
              <p className="text-sm text-gray-800 mt-2 md:text-xl">
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi gravida.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-20">
            <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold">
              Lorem Ipsum
            </button>
            <div className="flex items-center text-blue-700 text-sm font-medium gap-2">
              📞 <span>123456789</span>
            </div>
          </div>
        </div>

        {/* Right Big Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/motorbike2.jpg"
            alt="Motorbike Display"
            width={700}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </section>

{/* Third page */}
      <section className="flex flex-col md:flex-row md:p-16 gap-6 bg-white">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 style={{fontSize:"18px",fontWeight:"bold",color:"blue"}}>Lorem ipsum dolor sit amet</h2>
            <h1 className='md:text-6xl' style={{fontSize:"40px",fontWeight:"bold",marginTop:"10px"}}>LOREM IPSUM DOLOR SIT <br />AMET CONSECTETUR. EU <br />ELIT.</h1>

              <p style={{marginTop:"20px", fontSize:"19px"}}>Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
                condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
                pharetra erat lacus suspendisse ornare.</p>

                  <div className="flex items-start gap-4 mt-6">
                    <Image src="/thirdpagelogo1.jpg" alt="Feature 3" width={30} height={60} className="rounded-md mt-3" />
                    <p className="text-sm text-gray-800 mt-2 md:text-xl" style={{fontSize:"19px"}}>
                      <strong>Lorem ipsum dolor sit amet consectetur. Volutpat ha morbi egestas.</strong>
                        <br />Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                        viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                        vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 mt-6">
                    <Image src="/thirdpagelogo1.jpg" alt="Feature 3" width={30} height={60} className="rounded-md mt-3" />
                    <p className="text-sm text-gray-800 mt-2 md:text-xl" style={{fontSize:"19px"}}>
                      <strong>Lorem ipsum dolor sit amet consectetur. Volutpat ha morbi egestas.</strong>
                        <br />Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                        viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                        vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 mt-6">
                    <Image src="/thirdpagelogo1.jpg" alt="Feature 3" width={30} height={60} className="rounded-md mt-3" />
                    <p className="text-sm text-gray-800 mt-2 md:text-xl" style={{fontSize:"19px"}}>
                      <strong>Lorem ipsum dolor sit amet consectetur. Volutpat ha morbi egestas.</strong>
                        <br />Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                        viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                        vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>

        </div>

        <div className="md:w-1/2">
          <Image
            src="/persons.jpg"
            alt="Motorbike Display"
            width={400}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

      </section>

  {/* Fourth page */}

<section style={{ position: 'relative', width: '100%', height: '100vh' }}>
  <img
    src="/fourthpage.jpg"
    alt="fourthimg"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    }}
  />

  <h1
    className="fade-in"
    style={{
      position: 'absolute',
      top: '5%',
      left: '10%',
      backgroundColor: '#DBDBDB',
      color: '#000000',
      width: '230px',
      paddingLeft: '10px',
      fontSize: '5vw',
      fontWeight: 'bold',
    }}
  >
    LOGO
  </h1>

  <div
    className="slide-up"
    style={{
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      textAlign: 'center',
    }}
  >
    <h1
      style={{
        fontSize: '3.5vw',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem',
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Quis <br />
      adipiscing purus egestas aliquam viverra mi.
    </h1>

    <p
      style={{
        fontSize: '1.5vw',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem',
        padding: '0 5%',
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
      vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque
      id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate
      sed ut. Nisl porta massa diam condimentum nulla quam.
    </p>

    <p
      style={{
        fontSize: '1.5vw',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '2rem',
        padding: '0 5%',
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum
      ultrices non. Ornare semper in tincidunt pellentesque cras mauris in
      vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam
      lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque
      nulla ligula. Tincidunt cursus vitae leo.
    </p>

    <button
      className="slide-up"
      style={{
        color: 'blue',
        padding: '10px 30px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: 'white',
        fontSize: '1.2vw',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      Lorem Ipsum
    </button>
  </div>
</section>
{/* fifth page */}

    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10">
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. COMMODO LEO AMET.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-28 sm:w-32 md:w-36 h-auto">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>

{/* sixth page */}

    <section className="bg-white px-6 py-16 sm:px-12 lg:px-32">
      {/* Top Text */}
      <p className="text-blue-600 text-sm font-semibold mb-2">
        Lorem ipsum dolor sit amet
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        LOREM IPSUM DOLOR SIT
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
        Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at
        felis aliquet. Hendrerit tellus at purus lectus.
      </p>

      {/* Cards */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img
                src="/sixcard1.png"
                alt="City building"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-base font-semibold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus
                  nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.
                  Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh
                  rhoncus rhoncus enim venenatis bibendum.
                </p>
                <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                  Learn More
                </a>
              </div>
            </div>

          {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img
                src="/sixcard2.png"
                alt="Meditation statue"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-base font-semibold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus
                  nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.
                  Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh
                  rhoncus rhoncus enim venenatis bibendum.
                </p>
                <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img
                src="/sixcard3.png"
                alt="Meditation statue"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-base font-semibold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus
                  nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.
                  Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh
                  rhoncus rhoncus enim venenatis bibendum.
                </p>
                <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img
                src="/sixcard4.png"
                alt="Meditation statue"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-base font-semibold mb-2">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus
                  nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.
                  Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh
                  rhoncus rhoncus enim venenatis bibendum.
                </p>
                <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
     
    </section>


{/* seventh page */}

    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/seventhpage.png" // Replace with your image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Top Section */}
      <div className="relative z-20 flex justify-between items-start p-6">
        {/* Logo */}
        <div className="bg-gray-200 text-black font-bold px-10 py-4 text-sm rounded">
          LOGO
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold max-w-3xl leading-tight">
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. <br />
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
        </h1>
      </div>
    </section>

{/* eighth page */}

    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">REQUEST A QUOTE</h2>

      <form className="space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-28 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Time Frame<span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option>Choose Time Frame</option>
              <option>1 Week</option>
              <option>1 Month</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Size<span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option>Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Quantity<span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option>Choose Quantity</option>
              <option>1</option>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Please Describe Your Project<span className="text-red-500">*</span>
          </label>
          <textarea
            rows={6}
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Choose a project type"
          />
        </div>

        {/* Policy Text */}
        <p className="text-center text-sm text-gray-600 mt-2">
          By submitting this form you agree to our{" "}
          <a href="#" className="underline text-black">Terms of Service</a> and{" "}
          <a href="#" className="underline text-black">Privacy Policy</a>.
        </p>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded shadow font-semibold text-sm"
          >
            Lorem Ipsum →
          </button>
        </div>
      </form>
    </section>

{/* nineth page */}

   <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-blue-600 font-medium mb-2">Lorem Ipsum</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse
            convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque
            ultricies ipsum.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img src="/nineone.png" alt="Google Play" className="h-10" />
            <img src="/ninetwo.png" alt="App Store" className="h-10" />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src="/ninthree.png" // Replace with your phone hand image
            alt="Phone in hand"
            className="w-[500px] md:w-[500px]"
          />

          
        </div>
      </div>
    </section>

{/* tenth page */}

    <section className="bg-[#F3F7FA] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/3 space-y-5">
          <p className="text-xs text-gray-500 tracking-widest uppercase">No Limits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lorem Ipsum Dolor Sit Amet</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button className="bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded shadow hover:bg-blue-800 transition">
            Lorem Ipsum →
          </button>
        </div>

        {/* Right Gallery */}
        <div className="md:w-2/3 grid grid-cols-3 gap-4">
          <img src="/tenbike1.png" alt="bike1" className="w-full rounded-lg object-cover h-32 md:h-48" />
          <img src="/tenbike2.png" alt="bike2" className="w-full rounded-lg object-cover h-48 md:h-32" />
          <img src="/tenbike3.png" alt="bike3" className="w-full rounded-lg object-cover h-32 md:h-48" />
          <img src="/tenbike4.png" alt="bike4" className="w-full rounded-lg object-cover h-48 md:h-64 col-span-2" />
          <img src="/tenbike5.png" alt="bike5" className="w-full rounded-lg object-cover h-64 md:h-64" />
          <img src="/tenbike6.png" alt="bike6" className="w-full rounded-lg object-cover h-32 md:h-48" />
          <img src="/tenbike7.png" alt="bike7" className="w-full rounded-lg object-cover h-48 md:h-32" />
        </div>
      </div>
    </section>

{/* eleventh page */}

    <section>
        <div className="min-h-screen bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative w-full h-[400px] md:h-auto min-h-[600px]">
              <Image
                src="/eleventhimg.png"
                alt="Two motorcyclists"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <p className="text-blue-600 text-sm font-semibold mb-2">Lorem ipsum</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-blue-700">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
              </h1>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800 mb-6">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>

              <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition">
                Lorem Ipsum →
              </button>
            </div>
          </div>

          {/* Bottom border gradient */}
          <div className="h-2 bg-gradient-to-r from-blue-600 via-green-500 to-purple-900 mt-6" />
        </div>
    </section>

{/* twelth page */}
    <section>
      <main className="bg-blue-600 text-white min-h-screen p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <p className="text-sm font-semibold">Join other Sun harvesters</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <p className="mt-4 max-w-xl text-white/80">
                Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
                Eleifend mi tristique condimentum congue fusce nunc, donec
                magnis commodo.
              </p>
            </div>
            <button className="bg-white text-black font-semibold px-5 py-2 rounded shadow mt-6 md:mt-0">
              Lorem Ipsum
            </button>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡️",
                text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
                name: "Jane Cooper",
                avatar: "/tweleveone.jpg", // put your avatar image in /public
              },
              {
                icon: "⭐",
                text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
                name: "Ralph Edwards",
                avatar: "/twelevetwo.jpg",
              },
              {
                icon: "♟️",
                text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
                name: "Courtney Henry",
                avatar: "/twelevethree.jpg",
              },
              {
                icon: "➖",
                text: "Hendrerit augue ut integer quis integer netus. In est rhoncus magnis habitasse. Egestas amet habitant tellus ornare. Hendrerit ut mauris senectus. Mauris egestas vitae praesent neque.",
                name: "Cameron Williamson",
                avatar: "/twelevefour.jpg",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <p className="text-sm mb-6 text-gray-700">{card.text}</p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={card.avatar}
                    alt={card.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="text-sm font-semibold">{card.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4 justify-center mt-10">
            <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition">
              →
            </button>
          </div>
        </div>
      </main>
    </section>

{/* thirteen */}
    <section>
      <main className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left Content */}
          <div className="relative space-y-4">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">LOREM IPSUM DOLOR SIT AMET</h2>

            {/* Tab Buttons */}
            <div className="flex space-x-0 mt-2">
              {["Research"].map((tab, idx) => (
                <button
                  key={idx}
                  className="px-6 py-1 border border-gray-300 text-sm font-medium bg-gray-100 transition"
                >
                  {tab}
                </button>
              ))}
              {["Plan", "Design"].map((tab, idx) => (
                <button
                  key={idx}
                  className="px-10 py-1 border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Description Text */}
            <p className="text-gray-700 text-sm leading-relaxed">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis sit amet. Purus malesuada placerat arcu eu enim elit in accumsan.
            </p>

            {/* Link */}
            <a href="#" className="text-sm text-blue-600 font-medium inline-flex items-center space-x-1">
              <span>Check tools</span>
              <span>→</span>
            </a>

          </div>

          {/* Right Image */}
          <div className="w-full relative h-64 md:h-80 rounded overflow-hidden">
            <Image
              src="/thirteen.png"
              alt="Handshake"
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        </div>
      </main>
    </section>

{/* fourteen page */}

    <section>
      <main className="min-h-60vh p-6 md:p-12" style={{backgroundColor:"#F1F1F1"}}>
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
            LOREM IPSUM DOLOR SIT <br />
            AMET CONSECTETUR. <br />
            DIGNISSIM TELLUS.
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
            tortor tincidunt ultrices feugiat mauris. Aliquam platea turpis
            porta nisi felis. Massa in facilisis semper libero eget eu
            quisque bibendum platea. Tortor fames.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-semibold rounded transition">
            Lorem Ipsum →
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/fourteen.png"
            alt="Discussion near a bike"
            fill
            className="object-cover rounded"
            priority
          />
        </div>

        {/* Floating Card */}
        <div className="absolute bottom-[-210px] left-6 md:left-12 bg-white shadow-lg rounded p-6 max-w-md w-full border">
          {/* Red Pin Icon (you can use emoji or replace with an icon later) */}
          <div className="absolute top-4 right-4 text-red-600 text-xl">📌</div>

          <h3 className="font-semibold text-gray-900 mb-2">Lorem ipsum dolor sit</h3>
          <p className="text-sm text-gray-700 mb-2">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
          </p>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
          </p>
        </div>
      </section>

      {/* Bottom Gradient */}
      <div className="mt-32 h-2 bg-gradient-to-r from-blue-600 via-green-500 to-purple-900" />
    </main>
    </section>

{/* fifteen page */}
    <section>
       <main className="min-h-screen bg-white px-4 py-12 mt-16">
          <section className="max-w-5xl mx-auto text-center space-y-6">
            {/* Heading & Subheading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
              Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultrices. Malesuada at aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
            </p>

            {/* Image & Card */}
            <div className="relative mt-10 flex justify-left">
              {/* Image */}
              <div className="w-full max-w-xl h-[300px] md:h-[400px] relative">
                <Image
                  src="/fifteen.png"
                  alt="Group of motorcyclists"
                  fill
                  className="object-cover rounded"
                  priority
                />
              </div>

              {/* Card */}
              <div className="absolute top-10 right-4 bg-white shadow-lg rounded-lg p-4 w-[350px] md:w-[320px] text-left" style={{margin:"100px 50px",height:"170px",width:"500px"}}>
                <h3 className="font-semibold text-gray-900 mb-2">Artist & Investor</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...
                </p>
                <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">
                  Read Full Story →
                </a>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </div>
          </section>
       </main>
    </section>

{/* seventeen */}

     <section>
       <main className="min-h-screen bg-white text-black px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h1>

      <div className="border-t border-gray-200 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span className="text-base font-semibold text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus size={20} className="text-gray-700" />
              ) : (
                <Plus size={20} className="text-gray-700" />
              )}
            </button>

            {openIndex === index && faq.answer && (
              <p className="pb-4 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </main>
     </section>

{/* eighteen page */}
     <section>
       <main className="min-h-60vh flex flex-col justify-center items-center bg-white px-4 text-center mb-20">
          <div className="inline-block bg-gray-300 px-4 py-1 rounded text-sm font-bold mb-4">
            LOGO
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            LOREM IPSUM DOLOR SIT AMET <br className="hidden md:block" />
            CONSECTETUR. DUI.
          </h1>
          <p className="text-sm text-gray-700 max-w-md mb-6">
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 text-sm font-semibold rounded shadow">
            Lorem Ipsum →
          </button>
        </main>
     </section>

{/* last page */}
     <section>
        <footer className="bg-gray-900 text-white py-24 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo */}
            <div>
              <div className="inline-block bg-gray-300 px-6 py-3 rounded text-sm font-bold text-black">
                LOGO
              </div>
            </div>

            {/* Footer Links */}
            {[...Array(4)].map((_, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold mb-4">Lorem Ipsum</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>Lorem Ipsum</li>
                  ))}
                  
                </ul>
                
                
              </div>
            ))}
          </div>
        </footer>
     </section>

    </div>
    
  );
}
