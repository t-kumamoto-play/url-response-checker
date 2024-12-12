"use client"
// import Image from "next/image";
// import styles from "./page.module.css";
import React from "react";

export default function Home() {
  const [canUrlParse, setCanUrlParse] = React.useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log({ value })
    URL.canParse(value) ? setCanUrlParse(true) : setCanUrlParse(false);

    try {
      fetch(value).then((result) => {
        console.log({ result })
      }).catch((err) => {
        console.error(err)
      })
    } catch (e) {
      console.error(e)
    }
  };
  return (
    <div>
      <h1>URL check</h1>
      <input onChange={onChange} type="text" />

      <ul>
        <li>URLとして適切か？：{canUrlParse ? "はい" : "いいえ"}</li>
      </ul>
    </div>
  );
}
