import { Spin } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state?.auth);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setSpinning(false);
    }
  }, [router]);

  return (
    <>
      {!user ? (
        <>
          <Spin spinning={spinning} fullscreen />
        </>
      ) : (
        <main class="nk-body ui-rounder npc-default has-sidebar">
          {children}
        </main>
      )}
    </>
  );
};

export default DashboardLayout;
