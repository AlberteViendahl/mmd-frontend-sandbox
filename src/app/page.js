"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Cookie from "@/components/Cookie";
import If from "@/components/If";
import { Children } from "react";

export default function Home() {
  const [showC, setShowC] = useState(true);

  const handleAccept = () => {
    setShowC(false);
  };

  return (
    <div>
      <If condition={showC}>
        <Cookie onAccept={handleAccept} />
      </If>
    </div>
  );
}
