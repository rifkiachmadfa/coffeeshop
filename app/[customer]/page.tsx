"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import Image from "next/image";

export default function Customer() {
  const [Data, setData] = useState<any>({});

  return (
    <>
      <GoogleOAuthProvider clientId="599255657213-nugrem9f8hrir75kdb12985csaqo802l.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decode = jwtDecode(credentialResponse.credential || "");
            console.log(JSON.stringify(decode));
            setData(decode);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>

      <h1>Nama : {Data.name}</h1>
      {Data?.picture && (
        <Image alt="" src={`${Data.picture}`} width={100} height={100} />
      )}
    </>
  );
}
