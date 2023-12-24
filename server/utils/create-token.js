import { createPrivateKey } from "crypto";
import { V4 } from "paseto";

const { keyPrivate } = useRuntimeConfig();

export default id => V4.sign(
  { id },
  createPrivateKey({
    key: Buffer.from(keyPrivate, "hex"),
    type: 'pkcs8',
    format: 'der'
  }),
  { expiresIn: "365 days" }
);
