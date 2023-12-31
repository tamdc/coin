import axios from "axios";

const auth = async () => {
  try {
    const res = await axios.get("/auth", {
      auth: { username: "admin", password: "123" },
    });

    console.log("res data", res.data);
  } catch (error) {
    console.log("here is the error");
    console.log(error);
  }
};

export { auth };
