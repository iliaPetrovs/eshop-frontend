import React from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/user";

export default function Profile() {
  const [user] = useRecoilState(userAtom);
  return (
    <div>
      {user ? (
        <div>
          {user.name}
          <img src={user.imageUrl} />
        </div>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
}
