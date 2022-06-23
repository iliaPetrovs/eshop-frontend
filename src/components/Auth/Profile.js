import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../atoms/user";
import Loader from "../Misc/Loader";

export default function Profile() {
    const [user] = useRecoilState(userAtom);

    return (
        <div className="profile-container" style={{ paddingTop: "140px" }}>
            {user ? (
                <div>
                    <div className="profile-sidebar"></div>
                    <div className="profile-content">
                        <h3>{user.name}</h3>
                        <div>
                            {user.imageUrl ? (
                                <img src={user.imageUrl} />
                            ) : (
                                <Loader />
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Hello</div>
            )}
        </div>
    );
}
