import { FieldValue } from 'firebase-admin/firestore';
/**
 * Decrementa um valor no Firestore.
 *
 * @param [n=1] - O valor a ser decrementado. O valor padrão é 1.
 * @returns Retorna um objeto `FieldValue` que decrementa o valor no Firestore.
 */
export declare function decrement(n?: number): FieldValue;
