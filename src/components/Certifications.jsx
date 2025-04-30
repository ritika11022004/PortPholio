import React, { useState } from 'react';

function Certifications() {
  const certificates = [
    {
      title: "Code Art",
      description: "2nd position from CSIT",
      imgSrc: "/code art.jpg",
      imgAlt: "Code Art Certificate",
      id: "code-art-cert",
    },
    {
      title: "Cloud Computing & Distributed System",
      description: "SWAYAM NPTEL",
      imgSrc: "/Cloud_Computing_and_Distributed_System.jpg",
      imgAlt: "Cloud Computing & Distributed System Certificate",
      id: "cloud-computing-distributed-system-cert",
    },
    {
      title: "SpringBoot",
      description: "Seed IT Solution",
      imgSrc: "/Seed IT Solution.jpg",
      imgAlt: "SpringBoot Certificate",
      id: "spri-cert",
    },
    {
      title: "Python Web Development",
      description: "Techo-net",
      imgSrc: "/techonet.jpg",
      imgAlt: "Python Certificate",
      id: "py-cert",
    },
    {
      title: "AI & ML Workshop",
      description: "CSIT Campus",
      imgSrc: "/AIML.jpg",
      imgAlt: "AI ML Workshop Certificate",
      id: "aiml-cert",
    },
    {
      title: "Treasurer",
      description: "CSIT Campus",
      imgSrc: "/treasurer.jpg",
      imgAlt: "Treasurer Certificate",
      id: "trea-cert",
    },
  ];

  const [visibleImages, setVisibleImages] = useState({});

  const toggleImage = (id) => {
    setVisibleImages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div name="Certifications" className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">Certifications</h1>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white p-6 rounded-3xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{cert.title}</h2>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
            <button
              onClick={() => toggleImage(cert.id)}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              {visibleImages[cert.id] ? 'Hide Certificate' : 'View Certificate'}
            </button>
            {visibleImages[cert.id] && (
              <img
                src={cert.imgSrc}
                alt={cert.imgAlt}
                className="mt-4 w-full rounded-lg shadow-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
