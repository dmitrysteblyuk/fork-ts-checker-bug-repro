export default function () {
  let result2 = 0;
  // No TS error will be triggered:
  result2 = 'unused';
  return result2;
}
