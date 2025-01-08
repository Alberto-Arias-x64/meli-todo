import { useEffect, useState } from "react";

const useInput = (value: string | undefined): [string, (newValue: string) => void] => {
  const [data, setData] = useState(value ?? "");
  useEffect(() => {
    if (value !== data) {
      setData(value ?? "");
    }
  }, [value, data]);
  const updateData = (newValue: string) => setData(newValue);
  return [data, updateData];
};

export { useInput };
