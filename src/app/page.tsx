"use client"
import React from "react";

export default function Home() {
  // const load = async (_url: string) => {
  //   var xhr;
  //   xhr = new XMLHttpRequest();
  //   xhr.open("HEAD", _url, false);
  //   xhr.send(null);
  //   return xhr;
  // }
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // const res = await load(value);
    // console.log({ res })

    fetch(value, { mode: "cors" }).then((res) => {
      console.log({ res });
    }).catch((e) => {
      console.error("Error:", e);
    });

  };
  return (
    <div>
      <h1>URL check</h1>
      <input onChange={onChange} type="text" />

      <ul>
      </ul>
    </div>
  );
}
