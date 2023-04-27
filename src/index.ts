function lookString(chaine: string): boolean {
  return /^[A-Za-z\s]*$/.test(chaine);
}

function upperAlt(chaine: string): string | Error {
  if (!lookString(chaine)) {
    return new Error("La chaîne contient des caractères non valides.");
  }

  let result = "";
  let count = 0;

  for (const caract of chaine) {
    if (caract.match(/[A-Za-z]/)) {
      result += count % 2 === 0 ? caract.toUpperCase() : caract.toLowerCase();
      count++;
    } else {
      result += caract;
    }
  }

  return result;
}

function main(args: string[]): void {
  if (args.length !== 1) {
    console.error("Veuillez fournir exactement un argument.");
    process.exit(1);
  }

  const result = upperAlt(args[0]);
  if (result instanceof Error) {
    console.error(result.message);
    process.exit(1);
  } else {
    console.log(result);
  }
}

main(process.argv.slice(2));
