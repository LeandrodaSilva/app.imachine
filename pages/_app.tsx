import "../styles/globals.scss";
import React, { FC, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import { useRouter } from "next/router";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const verifySession = () => {
    const key = localStorage.getItem("session");
    if (!key) {
      router
        .push("/login")
        .then((value) => console.log("Redirecting to /login"));
    }
  };

  useEffect(() => {
    verifySession();
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  });

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
