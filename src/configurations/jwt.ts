import { sign, verify, SignOptions } from 'jsonwebtoken';
import { envs } from './envs';

// SEED
const secret: string = envs.JWT_SECRET;

//

export class Jwt {

    constructor() { }

    // Método para firmar el token
    static async sign(payload: Object, duration: any = '1h'): Promise<string | null> {
        try {
            // Usamos el método `sign` de `jsonwebtoken`, que devuelve una promesa
            const token = await sign(payload, secret, { expiresIn: duration });
            return token || null;
        } catch (err) {
            // Si ocurre un error, retornamos null
            console.error('Error al firmar el token:', err);
            return null;
        }
    }

    // Método para verificar el token
    static async verify<T>(token: string): Promise<T | null> {
        try {
            // Usamos el método `verify` de `jsonwebtoken`, que también devuelve una promesa
            const decoded = await verify(token, secret);
            return decoded as T || null;
        } catch (err) {
            // Si ocurre un error, retornamos null
            console.error('Error al verificar el token:', err);
            return null;
        }
    }
}
