import React from "react";
import { useParams } from "react-router-dom";

const data = {
  nana: {
    name: "나나",
    description: "우리집 갱얼쥥",
  },
  rin: {
    name: "린이",
    description: "우리집 순둥잉",
  },
};

const Profile = () => {
  // useParams : URL 파라미터의 값을 조회할 수 있게 해준다.
  const params = useParams();

  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      <div>
        {profile ? (
          <>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </>
        ) : (
          <p>존재하지 않는 프로필입니다.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
