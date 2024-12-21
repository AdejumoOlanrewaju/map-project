import React, { useState } from 'react'

const StandingCta = () => {
    const [activeBtn, setActiveBtn] = useState(false)
  return (
    <>
      <div className="standing-wrapper flex-between my-4">
        <button
          className={
            activeBtn === false
              ? "public-cta fs-20 fw-500"
              : "public-cta active fs-20 fw-500"
          }
          onClick={() => setActiveBtn((prev) => !prev)}
        >
          Public Standing T & D Standing
        </button>
        <button
          onClick={() => setActiveBtn((prev) => !prev)}
          className={
            activeBtn === false
              ? "private-cta fs-20 fw-500"
              : "private-cta active fs-20 fw-500"
          }
        >
          Private Standing T & D Standing
        </button>
      </div>
    </>
  );
}

export default StandingCta