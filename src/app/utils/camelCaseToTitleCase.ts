export const camelCaseToTitleCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (firstLetter) => firstLetter.toUpperCase());
};
