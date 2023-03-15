
import React from 'react';

const Shimmer = () => {
  return (
    <>
      <input className="search-container  p-2" placeholder="Search" type="text" />
      <div className="cardList flex mx-14 mt-16 flex-wrap justify-between">
        {Array(20)
          .fill('')
          .map((e, index) => (
            <div
              key={index}
              className="shimmer w-60 h-72  m-3  rounded-lg animate-pulse bg-gradient-to-r from-gray-200 to-gray-300"
            ></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
