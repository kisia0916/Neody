"use client"
import Image from "next/image";
import StudyingUsersBar from "./components/StudyingUsersBar/StudyingUsersBar";
import TimeLine from "./components/TimeLine/TimeLine";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Link href={"/unko"}>test</Link>
      <StudyingUsersBar/>
      <TimeLine/>
    </div>
  );
}
