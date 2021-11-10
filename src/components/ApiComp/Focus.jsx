import React, { useRef, useState, useEffect } from "react";

const Focus = () => {
  const [name, setName] = useState("");
  const inputRef = useRef("");
  const prevName = useRef("");
  const renderCount = useRef(1);

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        Your name is {name} but perviously it was {prevName.current}
      </p>
      <p>{renderCount.current}</p>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Focus;
