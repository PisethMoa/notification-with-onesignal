"use client";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create script element and set attributes
    const script = document.createElement("script");
    script.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
    script.async = true;

    // Append script to the body which triggers download and execution
    document.body.appendChild(script);

    // Event handler for when the script has loaded
    script.onload = () => {
      // Check if OneSignal is correctly initialized in the window
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function () {
        OneSignal.init({
          appId: "1755363d-7b2d-49fc-aa05-fd51f9bc181a", // Use your actual OneSignal App ID
          allowLocalhostAsSecureOrigin: true,
          notifyButton: {
            enable: true,
          },
        });
      });
    };

    // Cleanup function to remove script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>OneSignal + Next.js</title>
      </Head>
      <div>
        <h1>Welcome to OneSignal + Next.js</h1>
      </div>
    </>
  );
}
