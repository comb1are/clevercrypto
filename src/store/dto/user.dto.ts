


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


export interface UpdateUserDTO {
    firstname?: string;
    lastname?: string;
}
