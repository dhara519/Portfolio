import React from "react";
import Confetti from "react-confetti";

export const hero = () => {
  const text = "dhara519@gmail.com";
  const confetti = () => {};

  const copytoClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Confetti />
      <div>Email: {text}</div>
      <button onClick={copytoClipboard}>Email</button>
    </>
  );
};
