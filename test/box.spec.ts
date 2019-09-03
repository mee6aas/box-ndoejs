import { expect, use } from "chai";
import * as chaiAsPromised from "chai-as-promised";

import Box from "../src/box";
import * as mockServer from "./mock/server";

use(chaiAsPromised);

const HOST = "0.0.0.0";
const PORT = 51201;

describe("box with the mock server", () => {

    before(() => {
        mockServer.serve(PORT, HOST);
    });

    after(() => {
        mockServer.stop();
    });

    it("invokes an activity", async () => {
        const act = "open";
        const arg = "Jerry's stupid mayonnaise jar";

        const box = new Box(HOST, PORT);

        const rst = await box.invoke(act, arg);

        expect(rst).to.equal(mockServer.createInvokeRst(act, arg));
    });

    it("must fail when request without activity name", async () => {
        const act = "";
        const arg = "two strokes off of Jerry's golf game";

        const box = new Box(HOST, PORT);

        await expect(box.invoke(act, arg)).to.eventually.be.rejected;
    });
});
