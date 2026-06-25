import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export async function Log(stack, level, pkg, message) {
  try {
    console.log("Token Loaded:", process.env.ACCESS_TOKEN ? "YES" : "NO");

    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN.trim()}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Log created successfully");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("❌ Logging Failed");

    if (error.response) {
      console.log("Status :", error.response.status);
      console.log("Response :", error.response.data);
    } else {
      console.log(error.message);
    }
  }
}