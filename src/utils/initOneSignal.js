const initOneSignal = () => {
  if (typeof window !== "undefined" && !window.OneSignal) {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "your-app-id", // Replace "your-app-id" with your actual OneSignal App ID
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: true, // Set to false if you do not want a notification toggle button
        },
        serviceWorkerPath: "/OneSignalSDKWorker.js",
      });
    });
  }
};

export default initOneSignal;
