import React from 'react'
import partners from '../assets/partners.svg' ; 

const Partners = () => {
  return (
    <div className="max-w-[1320px] bg-gradient-5 m-auto">
      <div className='flex flex-col items-center p-5'>
        <p className='text-xl max-w-[70%] text-center'>
          Rejoignez plus de deux millions d'équipes à travers le monde qui
          utilisent Trello pour en faire plus.
        </p>
        <img src={partners} />
      </div>
    </div>
  );
}

export default Partners