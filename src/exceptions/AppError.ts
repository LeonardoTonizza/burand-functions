/**
 * Representa um erro da aplicação com título e código.
 */
export class AppError {
  /**
   * O título do erro.
   * @type {string}
   */
  public readonly message: string;

  /**
   * O código do erro.
   * @type {string}
   */
  public readonly code: string;

  /**
   * Cria uma instância de um erro da aplicação com título e código.
   *
   * @param {string} message - O título do erro.
   * @param {string} code - O código do erro.
   */
  constructor(message: string, code: string) {
    this.message = message;
    this.code = code;
  }
}
