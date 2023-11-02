import HeroManage from "@/app/components/hero-manage/HeroManage";
import DenseAppBar from "@/app/components/navbar-multisection/NavbarMulti";

export default function ManageBeats() {
  return (
    <>
      <DenseAppBar content="Manage Beats" link="/beatmakers" />
      <HeroManage />
    </>
  );
}
