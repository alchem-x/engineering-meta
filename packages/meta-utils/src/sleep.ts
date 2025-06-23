export function sleep(ms: number) {
  return {
    then(r: Function) {
      setTimeout(r, ms)
    },
  }
}
