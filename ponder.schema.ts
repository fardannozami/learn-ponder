import { onchainTable } from "ponder";

export const transfer = onchainTable("transfer", (t) => ({
  id: t.text().primaryKey(),
  hash: t.hex(),
  from: t.hex(),
  to: t.hex(),
  timestamp: t.bigint(),
  amount: t.bigint(),
}));