import React, { useState } from 'react';

export default () => {
  const [name] = useState('React Component');

  return <h1>Hello, { name }!</h1>;
}
