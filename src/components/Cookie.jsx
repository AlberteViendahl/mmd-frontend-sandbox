"use client";

import { RxCookie } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from "./Button";

const Cookie = () => {
  const [isCookieAcceptedClosed, setIsCookieAcceptedClosed] = useState(false);

  return (
    !isCookieAcceptedClosed &&
    !isCookieAcceptedClosed && (
      <div className="baggrund dark:bg-white">
        <div className="flex">
          {" "}
          <RxCookie className="cookie" />
          <RxCross1
            onClick={(setIsCookieAcceptedClosed) => "!isCookieAcceptedClosed"}
            className="kryds"
          />
        </div>

        <p>We used Cookie to improve your user experience.</p>
        <Button />
      </div>
    )
  );
};

export default Cookie;
