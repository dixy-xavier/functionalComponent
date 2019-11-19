import React, { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("mounted");
    return () => console.log("unmounted");
  }, []);
  return <div>here</div>;
};
export default Child;
