export class CyrillicInput {
  cache: { [character: string]: string };

  regexify(input: string): RegExp;
}
