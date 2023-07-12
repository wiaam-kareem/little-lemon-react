export default function timesToOptions(times) {
  const timesOptions = times.map((time) => ({
    value: time,
    label: time,
  }));
  return timesOptions;
}
