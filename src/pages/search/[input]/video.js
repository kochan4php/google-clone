import GoogleNavbar from "@/components/GoogleNavbar";
import Layouts from "@/layouts";
import { useRouter } from "next/router";

const VideoPage = () => {
  const router = useRouter();
  const { input } = router.query;

  return (
    <Layouts title={`${input?.split("+")?.join(" ")} - Penelusuran Video`}>
      <GoogleNavbar destination="video" />
      <div className="container px-4 overflow-y-auto">
        <h1>Hehe</h1>
      </div>
    </Layouts>
  );
};

export default VideoPage;
