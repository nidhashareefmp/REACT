import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? '🔊 ON' : '🔇 OFF'}
    </button>
  );
}

export default ToggleButton;
