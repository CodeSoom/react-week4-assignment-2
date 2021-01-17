export function mapValues(object, mapFn) {
  return Object.entries(object).reduce((trimmed, [key, value]) => (
    { ...trimmed, [key]: mapFn(value) }
  ), {});
}

export default {
  mapValues,
};
