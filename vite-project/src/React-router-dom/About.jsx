import React from 'react'


const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975918318-3e5e1c5a5b3f')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            About <span className="text-pink-400">Eleganza</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Story</h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Founded in 2020, <span className="text-pink-500 font-semibold">Eleganza</span> is a modern dress brand that blends
          style, comfort, and sustainability. We believe that fashion should not
          only make you look good but also feel good. Every piece we design is
          crafted with attention to detail, quality fabrics, and timeless
          elegance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To create high-quality dresses that empower women and celebrate
              individuality through timeless fashion.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To become a trusted name in fashion known for elegance,
              sustainability, and craftsmanship.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Our Values</h3>
            <p className="text-gray-600 text-sm">
              We value honesty, creativity, and responsibility — ensuring every
              product reflects beauty inside and out.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sophia Lane", role: "Founder" },
              { name: "Emma Ray", role: "Creative Head" },
              { name: "Olivia Brown", role: "Marketing Lead" },
              { name: "Isabella Smith", role: "Designer" },
            ].map((member, i) => (
              <div key={i} className="p-4">
                <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-3"></div>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="py-10 text-center text-gray-600 text-sm border-t">
        © 2025 Eleganza. All rights reserved.
      </div>
    </div>
  );
};

export default About
