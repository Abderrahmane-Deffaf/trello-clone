import React from "react";

const Lancez = () => {
  return (
    <div className="bg-gradient-6 ">
      <div className="max-w-[1320px] flex justify-center py-[5rem]">
        <form className='flex gap-4 justify-center w-full'>
          <label htmlFor='email' >
            <input className='p-3 rounded-lg focus:outline-white' placeholder='E-mail' name='email'/>
          </label>
          <button className='bg-blue p-3 hover:bg-darkblue  rounded-lg text-white'>Inscrivez-vous, c'est gratuit !</button>
        </form>
      </div>
    </div>
  );
};

export default Lancez;
