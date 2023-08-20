import { Button } from 'ccgx-insurance';
import { useState } from 'react';

export const UserProfile = () => {
  const [userData, setUserData] = useState({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  });
  const fetchUser = async () => {
    const randomNumber = Math.floor(Math.random() * 8) + 2;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUserData(data[randomNumber]);
  };

  const {
    name,
    email,
    address: { city },
  } = userData;

  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <h2 className="text-center text-2xl font-semibold mt-3">
          {name}, {city}
        </h2>
        <p className="text-center text-gray-600 mt-1">Software Engineer</p>
        <div className="mt-5 flex justify-center flex-col items-center">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-600 mt-2">{email}</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button variant="primary" btnStyle="flex justify-center" label="Get Random User" onClick={() => fetchUser()} />
      </div>
    </>
  );
};
