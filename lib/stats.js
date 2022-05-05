function getStats(validObject) {
  const unique = [...new Set(validObject.map((item) => item.href))];
  return unique;
}
module.exports = { getStats };
