import { V4 } from "paseto";
import { createPublicKey } from "crypto";

export default defineEventHandler(async e => {
  try {
    const
      { token } = parseCookies(e),
      { keyPublic } = useRuntimeConfig();

    if (!token) {
      e.context.tokenData = null;
    } else {
      const payload = await V4.verify(
        token,
        createPublicKey({
          key: Buffer.from(keyPublic, "hex"),
          type: 'spki',
          format: 'der'
        })
      );
      e.context.tokenData = payload;
    }
  } catch (err) {
    e.context.tokenData = null;
  }
})
