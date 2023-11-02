import HeroManage from "@/app/components/hero-manage/HeroManage";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";

export default function ManageSongs() {
  return (
    <>
      <DenseAppBar content="Manage Songs" link="/artists" />
      <HeroManage isBeatMaker={false} />
    </>
  );
}
