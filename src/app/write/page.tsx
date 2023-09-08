'use client';
import axios from "axios";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title || !content) {
      return alert("제목과 내용을 모두 입력해주세요.");
    }
    try {
      const response = await axios.post("http://localhost:4000/content", {
        title,
        content,
      });
      console.log(response);
      router.push('/') // 홈으로 이동
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
    <h2>글 작성 모달</h2>
    <div className={styles.title}>
      <input
        className={styles.inputTitle}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div className={styles.content}>
      <input
        className={styles.inputContent}
        type="text"
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </main>
  );
};