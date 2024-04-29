export function isRunningOnClient() {
  return typeof window !== "undefined";
}
