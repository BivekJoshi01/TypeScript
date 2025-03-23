import React from 'react';

const Partners = () => {
  const partners = [
    { id: 1, name: 'Partner 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Partner 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Partner 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Partner 4', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className=" p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
