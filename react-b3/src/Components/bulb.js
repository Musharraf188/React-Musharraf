import React, { useState } from 'react';

import imgoff from "./img/Bulb_off.png"
import imgon from "./img/Bulb_on.png"
function Bulb() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>{isOn ? 'Turn Off' : 'Turn On'}</button>
      <img src={isOn ? imgoff : imgon} alt="Bulb" />
    </div>
  );
}

export default Bulb;