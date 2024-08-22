export function* range(
  start: number,
  end: number,
  step: number = 1
): Generator<number, void, unknown> {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
