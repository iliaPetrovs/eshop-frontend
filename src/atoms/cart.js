import { atom } from "recoil";
import { getStorage } from "../utils/basketManager";

const cartAtom = atom({
    key: "cart",
    default: getStorage(),
});

export { cartAtom };
