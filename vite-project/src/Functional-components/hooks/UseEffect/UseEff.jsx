import React, { useEffect, useState } from 'react'

const UseEff = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
          setSeconds((s) => s + 1);
        },1000);

        //unmount
        return () => clearInterval(interval)
        
    },[]) //mount
  return (
    <div>
      <p>Timer: {seconds}seconds</p>
    </div>
  )
}

export default UseEff
