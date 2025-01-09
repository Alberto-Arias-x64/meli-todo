import { useEffect, useState } from "react";

const useInput = (value: string | undefined): [string, (newValue: string) => void] => {
  const [data, setData] = useState(value ?? "");

  useEffect(() => {
    if (value !== undefined && value !== data) {
      setData(value);
    }
  }, [value]);

  const updateData = (newValue: string) => setData(newValue);

  return [data, updateData];
};

export { useInput };

