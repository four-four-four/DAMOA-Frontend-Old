import axios from "axios";

// axios 객체 생성
export default axios.create({
  baseURL: "http://ec2-3-35-159-73.ap-northeast-2.compute.amazonaws.com/api",
  // baseURL: "http://localhost:9999/api",
  headers: {
    "Content-type": "application/json",
  },
});
