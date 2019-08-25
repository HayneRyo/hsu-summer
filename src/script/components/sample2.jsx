import React, { useState } from 'react';

export default () => {
  const [name, setName] = useState('');

  return (
    <section className='container'>
      <h2>Binding Sample</h2>
      <p>Hello! { name }!!</p>
      <input type='text' placeholder='enter a name here' onChange={e => setName(e.target.value)} value={name} />
    </section>
  );
};
