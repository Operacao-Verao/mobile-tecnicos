export class TokenError extends Error {
  constructor() {
    super('Token não cadastrado!');
  }
}