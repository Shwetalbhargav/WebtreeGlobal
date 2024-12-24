import React, { useEffect, useState } from 'react';

function ProfilecCard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  if (!userData) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  const { name, gender, phone, picture } = userData;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {/* Outer white box */}
      <div className="bg-white border-6 border-black w-[600px] p-6">
        {/* Inner card */}
        <div className="flex border-4 border-black p-4">
          {/* Image container */}
          <div className="w-[150px] h-[150px] border-2 border-black flex items-center justify-center">
            <span>
            <img
            src={picture.large}
            alt={`${name.first} ${name.last}`}
            className="w-full h-full object-cover border-4 border-black"
          />

            </span>
          </div>
          {/* Text container */}
          <div className="ml-4 flex flex-col justify-center">
          <h2 className="font-semibold text-lg">
            FirstName: {name.first}
          </h2>
          <h2 className="font-semibold text-lg mt-1">
            LastName: {name.last}
          </h2>
          <p className="text-gray-600 mt-2">Gender: {gender}</p>
          <p className="text-gray-600 mt-2">Phone Number: {phone}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilecCard;
