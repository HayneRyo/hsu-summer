import React, { useState, useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (count != 0 && count%3 == 0) window.alert(`Your count is ${count}!! 🎉`);
  });

  return (
    <section className='container'>
      <h2>Action Sample</h2>
      <p>Current is { count }.</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </section>
  );
}
