import { auth } from "@/auth";
import StudyingUsersBar from "./components/StudyingUsersBar/StudyingUsersBar";
import TimeLine from "./components/TimeLine/TimeLine";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <div className="home">
      <StudyingUsersBar/>
      <TimeLine/>
    </div>
  );
}
