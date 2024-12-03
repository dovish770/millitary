import React, { useState } from 'react';
import './name.css'

const NameInput = () => {
  const [name, setName] = useState('');

  const handleChange = (event:any) => {
    setName(event.target.value);
  };

  return (
    <div className="bQZIXs8p">
      <label htmlFor="name" className="label">שם מלא</label>
      <input
        type="text"
        id="name"
        className="_2cql7TAs"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default NameInput;
