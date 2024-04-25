import axios from "axios";
import { useState } from "react";

const Axios = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    console.log("버튼 작동");
    try {
      const respanse = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ef24204c33cb4aebaf4aaab115408a6c",
      );
      setData(respanse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>axios</h2>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          readOnly={true}
          value={JSON.stringify(data, null, 2)}
        />
      )}
    </div>
  );
};

export default Axios;
