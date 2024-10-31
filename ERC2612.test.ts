import { loadFixture, ethers, SignerWithAddress } from "./setup";
import type { MyToken, Proxy } from "../typechain-types";

interface ERC2612PermitMessage {
    owner: string;
    spender: string;
    value: number | string;
    nonce: number | string;
    deadline: number | string;
}

interface RSV {
    r: string;
    s: string;
    v: number;
}

interface Domain {
    name: string;
    version: string;
    chainId: number;
    verifyingContract: string;
}

describe("MyToken", function() {
    async function deploy() {
        const [ user1, user2 ] = await ethers.getSigners();

        const Factory = await ethers.getContractFactory("MyToken");
        const token: MyToken = await Factory.deploy();

        const PFactory = await ethers.getContractFactory("Proxy");
        const proxy: Proxy = await PFactory.deploy();

        return { token, proxy, user1, user2 }
    }
});