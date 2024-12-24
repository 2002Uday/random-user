import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  if (!user) {
    return <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#8019bc] to-[#139dd1] w-full">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#8019bc] to-[#139dd1] w-full">
      <div className="bg-white shadow-lg rounded-lg p-5 lg:p-10 flex flex-col lg:flex-row lg:w-1/2 gap-6 lg:gap-10 text-center lg:text-start items-center lg:items-stretch">
        {/* Left Section - Image */}
          <img
            className="rounded-lg object-contain w-full lg:w-1/3"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        {/* Right Section - Details */}
        <div className="flex flex-col justify-evenly">
          <h2 className="text-2xl xl:text-6xl font-bold">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-500 md:text-xl xl:text-2xl">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-gray-500 md:text-xl xl:text-2xl">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
