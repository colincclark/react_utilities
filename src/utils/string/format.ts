const capitalizeFirstLetter = (input: string) =>
  input[0].toUpperCase() + input.slice(1);

const capitalizeWords = (input: string): string => {
  if (typeof input !== "string" || !input.trim()) {
    return "";
  }

  if (!input.includes(" ")) {
    return capitalizeFirstLetter(input);
  }

  return input
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};

export { capitalizeFirstLetter, capitalizeWords };
