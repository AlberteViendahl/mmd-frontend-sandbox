import { RxCookie } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from "./Button";

const Cookie = () => {
  return (
    <div className="baggrund dark:bg-white">
      <div className="flex">
        {" "}
        <RxCookie className="cookie" />
        <RxCross1 className="kryds" />
      </div>

      <p>We used Cookie to improve your user experience.</p>
      <Button />
    </div>
  );
};

export default Cookie;
