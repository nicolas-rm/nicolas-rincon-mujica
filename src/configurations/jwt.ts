import { sign, verify, SignOptions } from 'jsonwebtoken';
import { envs } from './envs';

// SEED
const secret: string = envs.JWT_SECRET;

//

export class Jwt {

    constructor() { }

    // Método para firmar el token
    static async sing(payload: Object, duration: any = '1h'): Promise<string | null> {
        return new Promise((resolve, reject) => {
            sign(payload, secret, { expiresIn: duration }, (err, token) => {

                if (err) return resolve(null)

                if (!token) return resolve(null)

                resolve(token); // Si no hay error, resolvemos la promesa
            })
        });
    }

    // Método para verificar el token
    static async verify<T>(token: string): Promise<T | null> {
        return new Promise((resolve, reject) => {
            verify(token, secret, (err, decoded) => {

                if (err) return resolve(null)

                resolve(decoded as T); // Si no hay error, resolvemos la promesa
            })
        });
    }
}
