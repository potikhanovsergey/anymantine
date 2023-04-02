const getHyphenCase = (value: string) => {
  return value
    .replaceAll(" ", "")
    .replace(/[A-Z]/g, (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase())
}

export default getHyphenCase
