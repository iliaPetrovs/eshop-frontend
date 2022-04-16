import { atom } from "recoil";

const authenticatedAtom = atom({
  key: "authenticated",
  default: false,
});

export { authenticatedAtom };
