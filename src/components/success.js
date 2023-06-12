import React from 'react';

const Success = () => {
  return (
    <div className="success_block">
      <img src="/image/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p></p>
      <button onClick={() => window.location.reload()} className="btn">Back</button>
    </div>
  );
};

export default Success;