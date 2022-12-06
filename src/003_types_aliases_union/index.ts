// Type Alias
type ItemProps = string;

function logDetails(uid: number, item: ItemProps) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: number | string, item: ItemProps) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

// logDetails("123", "shoes");
logDetails(123, "shoes");

logInfo("123", "shoes");
logInfo(123, "shoes");
