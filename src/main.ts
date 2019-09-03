import Box from "./box";

const HOST = process.env.AGENT_HOST || "0.0.0.0";
const PORT = process.env.AGENT_PORT || 5122;

export = new Box(HOST, PORT);
