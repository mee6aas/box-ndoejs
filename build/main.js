"use strict";
const box_1 = require("./box");
const HOST = process.env.AGENT_HOST || "0.0.0.0";
const PORT = process.env.AGENT_PORT || 5122;
module.exports = new box_1.default(HOST, PORT);
