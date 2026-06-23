const stats = [
  { value: '500+', label: 'Women Empowered' },
  { value: '10+', label: 'Active Programs' },
  { value: '5+', label: 'States Covered' },
  { value: '100+', label: 'Volunteers' },
]

const values = [
  {
    icon: '🌸',
    title: 'Empowerment',
    desc: 'We provide women with the tools, resources, and confidence to take control of their lives and futures.',
  },
  {
    icon: '📚',
    title: 'Education',
    desc: 'We believe education is the most powerful weapon to change the world and break the cycle of inequality.',
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'We work closely with local organizations and communities to ensure our programs are effective and sustainable.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-2 mb-4">
            About She Can Foundation
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              She Can Foundation is a non-governmental organization registered under
              the Indian Society Act, 1860. We are dedicated to empowering women and
              creating a more equitable society by providing support, resources, and
              training to women in communities across the globe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Founded by Reeta Mishra and a group of individuals with a shared vision,
              we work closely with local organizations, governments, and communities
              to ensure our programs are effective, inclusive, and sustainable.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Through advocacy campaigns and initiatives, we raise awareness of
              women's issues and rely on the support of individuals, corporations,
              and other organizations to achieve our vision of revolutionizing society
              and creating a better world for all.
            </p>

            {/* Founder quote */}
            <div className="mt-6 border-l-4 border-primary pl-4 bg-primary-light py-3 pr-4 rounded-r-lg">
              <p className="text-gray-700 italic text-sm leading-relaxed">
                "Together, we can break down barriers and empower women. If we all
                do our part, there is no challenge too great to overcome."
              </p>
              <p className="text-primary font-semibold text-sm mt-2">
                — Reeta Mishra, Founder & President
              </p>
            </div>
          </div>

          {/* Visual Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="opacity-90 text-sm leading-relaxed mb-6">
              To empower women and create a more equitable society by providing
              support, resources, and training while raising awareness about
              women's issues through advocacy.
            </p>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="opacity-90 text-sm leading-relaxed mb-6">
              A world where every woman has the opportunity to thrive and succeed,
              regardless of her background or circumstances.
            </p>
            <div className="border-t border-white border-opacity-30 pt-4">
              <p className="text-xs opacity-75">Registered under Indian Society Act, 1860</p>
              <p className="text-xs opacity-75 mt-1">
                Contact: president@shecanfoundation.org
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-primary-light rounded-xl py-6 px-4 border border-primary border-opacity-20"
            >
              <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-primary hover:border-opacity-40"
            >
              <div className="text-3xl mb-3">{val.icon}</div>
              <h4 className="font-bold text-dark text-lg mb-2">{val.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}