// Exo #001 - sort args in ascending order

// sort asc + Error handling

function sortNumbers(args: string[]): string {
  if (args.length === 0) {
    throw new Error("Merci de rentrer aux moins 2 valeurs.");
  }

  const numbers = args.map((arg) => parseInt(arg, 10));

  if (numbers.some((number) => isNaN(number))) {
    throw new Error("l'Arguments doit être un nombre.");
  }

  numbers.sort((a, b) => a - b);

  return `Voici votre liste trié dans l'ordre croissant Bob => ${numbers.join(
    " "
  )}`;
}

// main function

function main() {
  try {
    const args = process.argv.slice(2);
    console.log(sortNumbers(args));
  } catch (error: any) {
    console.error("Error:", error.message);
  }
}

// call main function, he work with args in terminal

main();
