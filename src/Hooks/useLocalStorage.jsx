import * as React from "react";
import { useEffect, useState } from "react";

const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};

export default useLocalStorage;
