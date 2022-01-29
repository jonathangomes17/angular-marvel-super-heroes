import { ISerialize } from 'src/app/interfaces/serialize.interface';

export class UserModel implements ISerialize {
  /**
   * Email
   * @param email
   */
  #email: string;

  /**
   * Fullname
   * @param fullName
   */
  #fullName: string;

  /**
   * User is authenticated
   * @param isAuthenticated
   */
  #isAuthenticated: boolean;

  //@ts-ignore
  constructor({ email = '', fullName = '', isAuthenticated = false }) {
    this.#email = email;
    this.#fullName = fullName;
    this.#isAuthenticated = isAuthenticated;
  }

  /**
   * Get an email user
   * @returns string
   */
  get email(): string {
    return this.#email;
  }

  /**
   * Get full name user
   * @returns string
   */
  get fullName(): string {
    return this.#fullName;
  }

  /**
   * User is authenticated
   * @returns boolean
   */
  get isAuthenticated(): boolean {
    return this.#isAuthenticated;
  }

  /**
   * Convert to object principals data of user
   * @returns object
   */
  serialize(): object {
    return {
      email: this.#email,
      fullName: this.#fullName,
      isAuthenticated: this.#isAuthenticated
    }
  }
}
