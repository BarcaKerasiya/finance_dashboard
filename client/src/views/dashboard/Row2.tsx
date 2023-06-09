import DashboardBox from "@/components/DashboardBox";
import React from "react";

type Props = {
  //
};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox sx={{ gridArea: "b" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "e" }}></DashboardBox>
      <DashboardBox sx={{ gridArea: "f" }}></DashboardBox>
    </>
  );
};

export default Row2;
