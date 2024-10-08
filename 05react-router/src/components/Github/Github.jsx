import React from "react";
import { useState, useEffect } from "react";

function Github() {
  // const data = useLoaderData();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AJ-KUSHWAH")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>Github Followers: {data.followers}</div>
      <img src={data.avatar_url}></img>
    </>
  );
}

export default Github;

// export const githubInfo = async () => {
//   const promise = await fetch("https://api.github.com/users/AJ-KUSHWAH");
//   return promise.json();
// };
