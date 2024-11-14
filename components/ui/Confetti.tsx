// Confetti is disabled for now. Work on responsive resizing / container structure
"use client";
// import Confetti from "react-confetti";
// import React, { useState } from "react";
import { MagicButton } from "./MagicButton";

export default function ConfettiOnCopyEmail() {
  const text = "dhara519@gmail.com";
  // const [ShowConfetti, SetShowConfetti] = useState(false);

  const CelebrateCopy = () => {
    navigator.clipboard.writeText(text);
    // SetShowConfetti(true);
    // setTimeout(() => SetShowConfetti(false), 4000);
  };

  return (
    <>
      <div className="grid justify-center items-center h-full w-full">
        {" "}
        {/* {ShowConfetti && <Confetti width={150} height={150} />} */}
        {text}
        <MagicButton
          onClick={CelebrateCopy}
          title="Copy My Email:"
        ></MagicButton>
        {/* {ShowConfetti && <Confetti width={150} height={150} />} */}
      </div>
    </>
  );
}
