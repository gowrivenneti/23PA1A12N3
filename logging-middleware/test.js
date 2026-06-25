import { Log } from "./src/logger.js";

async function testLogger() {
  await Log(
    "frontend",
    "info",
    "component",
    "Testing logging middleware"
  );
}

testLogger();