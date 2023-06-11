import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {
  //
};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      {" "}
      <DashboardBox sx={{ gridArea: "a" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "c" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "d" }}></DashboardBox>
    </>
  );
};

export default Row1;
