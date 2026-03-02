/**
 * DTO: Точное зеркало JSON-ответа бэкенда.
 * НЕ использовать в UI-компонентах напрямую!
 */

/** GET /user/get */
export interface UserDTO {
    id: number;
    email: string;
    address: string;
    firstname: string;
    lastname: string;
    balance: number;
    status: string;
    date_reg: string;
}

/** POST /user/save — частичное обновление */
export interface UpdateUserDTO {
    firstname?: string;
    lastname?: string;
}
