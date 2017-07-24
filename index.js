function getRandommoment() {
  const moments = ["moment", "date", "time", "parse", "format", "validate", "i18n", "l10n", "ender"];
  return moments[math.floor(math.random() * moment.length)]

}

module.exports = getRandommoment;
