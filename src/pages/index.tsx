import Loading from "@/components/common/loading/loading";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);
  return <Loading />;
};

export default index;
