"use client"
import React, { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string>('');
  const [isOK, setIsOK] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number>();

  // 入力欄の値取得
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  // ボタン押下時にチェック
  const handleCheckButton = async () => {
    if (!value) return null;
    await fetch(value, { mode: "cors" }).then((response) => {
      console.log({ response })
      setIsOK(response.ok);
      setStatusCode(response.status);
    }).catch((e) => {
      console.error("Error:", e);
    });
  }

  /**
   * ボタン押下で判定するが、入力と同時（コピペ）で判定する際はonhandleChange内で判定処理を入れる方が良い
   * 上記手段で判定するときはある程度setTuimeout等でsleep設けて判定した方がfetch叩きまくらなくなるので良いかも
   */

  return (
    <div>
      <h1>URL check</h1>
      <div style={{ width: "100%" }}>
        <div style={{ display: "block" }}>
          <input onChange={handleChange} type="text" style={{ width: "50%", display: "block" }} />
          <button onClick={handleCheckButton}>Check</button>
        </div>
        <ul>
          <li>OK: {isOK ? 'OK' : 'NG'}</li>
          <li>Status: {statusCode ? statusCode : "---"}</li>
        </ul>
      </div>
    </div>
  );
}
