import DashboardBox from "@/components/DashboardBox";
import React from "react";

type Props = {
  //
};

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardBox sx={{ gridArea: "g" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "h" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "i" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "j" }}></DashboardBox>
    </>
  );
};

export default Row3;
