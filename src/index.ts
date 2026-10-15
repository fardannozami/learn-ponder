import { ponder } from "ponder:registry";
import { transfer } from "ponder:schema";

ponder.on("SawitToken:Transfer", async ({ event, context }) => {
  await context.db.insert(transfer).values({
    id: event.transaction.hash + "-" + event.log.logIndex,
    hash: event.transaction.hash,
    from: event.args.from,
    to: event.args.to,
    timestamp: event.block.timestamp,
    amount: event.args.value,
  });
});