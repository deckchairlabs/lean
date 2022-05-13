export function hasTrailingSlash(input: string): boolean {
  if (input.length > 1 && input[input.length - 1] === "/") {
    return true;
  }

  return false;
}

export function removeTrailingSlash(input: string): string {
  if (hasTrailingSlash(input)) {
    input = input.slice(0, input.length - 1);
  }
  return input;
}

const decoder = new TextDecoder();

export async function readFileAndDecode(path: string | URL) {
  return decoder.decode(await Deno.readFile(path));
}
