function trimValues(object) {
  return Object.entries(object).reduce((trimmed, [key, value]) => (
    { ...trimmed, [key]: value.trim() }
  ), {});
}

export default {
  trimValues,
};
