import DashboardBox from "@/components/DashboardBox";

type Props = {
  //
};

const Row1 = (props: Props) => {
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
