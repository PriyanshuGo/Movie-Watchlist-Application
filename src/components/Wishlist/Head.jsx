import { useState, useEffect } from "react";

function Head() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="my-7 mx-2">
      <h1 className="text-4xl font-bold text-center text-white tracking-tight">
        WatchLater
      </h1>
      <div className="flex justify-center items-center p-2 text-white space-x-2 text-sm font-medium">
        <p className="bg-gray-800/80 rounded-4xl px-3 py-1 text-gray-300">{`${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`}</p>
        <p className="bg-gray-800/80 rounded-4xl px-3 py-1 text-gray-300">
          {`${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`}
          {value.getHours() > 12 ? " PM" : " AM"}
        </p>
      </div>
    </div>
  );
}

export default Head;
