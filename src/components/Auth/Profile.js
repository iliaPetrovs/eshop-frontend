import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/user";

export default function Profile() {
    const [user] = useRecoilState(userAtom);
    // useEffect(() => {
    //     console.log(user);
    // }, [user]);
    return (
        <div style={{ paddingTop: "140px" }}>
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
