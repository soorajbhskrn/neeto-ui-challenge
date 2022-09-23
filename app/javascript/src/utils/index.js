import * as R from "ramda";

const convertToCamelCase = sentence => {
  const [firstWord, ...rest] = sentence.split(" ");
  return [firstWord.toLowerCase(), ...rest.map(capitalize)].join("");
};

const capitalize = word => word[0].toUpperCase() + word.slice(1);

export const buildSelectOptions = labels =>
  labels.map(label => ({
    label,
    value: convertToCamelCase(label),
  }));

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
