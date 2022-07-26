import React, { useEffect, useState } from "react";
import { Tab } from "../components/ui/Tab";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Main() {
  // 게시물 받아와서 상태에 넣기
  const [posts, setPosts] = useState([]);
  // 컬렉션이름이 posts인 db데이터 가져오기
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      setPosts(data.docs.map((doc) => ({ ...doc.data()})))
    }

    getPosts();
  }, [])

  console.log(posts)

  // console.log(...posts.filter((el) => el.nickName === 'chapchap'))

  return (
    <div>
      Main
      <Tab />
    </div>
  );
}

export default Main;
