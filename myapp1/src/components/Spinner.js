import React from 'react'
import loading from './loading.gif'

const Spinner = () => {

  return (
    <div className='text-center my-5' >
      <img src={loading} style={{ height: "30px" }} alt='Loading' />
    </div>
  );
}

export default Spinner;