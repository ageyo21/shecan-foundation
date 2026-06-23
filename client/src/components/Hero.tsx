export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary via-primary-dark to-[#4A1040] min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-white opacity-5" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] rounded-full bg-white opacity-5" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-slide-up">

        {/* Badge */}
        <div className="inline-block bg-white bg-opacity-20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white border-opacity-30">
          🌸 Govt. Registered NGO — Indian Society Act, 1860
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Together We Can{' '}
          <span className="text-primary-mid">Change The World</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
          She Can Foundation is dedicated to empowering women and creating a more
          equitable society through education, support, and community-driven programs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-primary-light transition-all duration-200 hover:scale-105 shadow-lg"
        >
            Get Involved
          </a>
          
          <a
            href="#about"
            className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105"
        >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Women Empowered' },
            { value: '10+', label: 'Programs' },
            { value: '5+', label: 'States Covered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-xs text-white opacity-75 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={'M0 60L1440 60L1440 30C1200 60 900 0 720 0C540 0 240 60 0 30L0 60Z'}
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}