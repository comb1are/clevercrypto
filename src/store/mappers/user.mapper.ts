import type { UserDTO } from '../dto/user.dto';
import type { User } from '../models/user.model';


export function mapUserFromDTO(dto: UserDTO): User {
    return {
        id: Number(dto?.id) || 0,
        email: String(dto?.email ?? ''),
        walletAddress: String(dto?.address ?? ''),
        firstName: String(dto?.firstname ?? ''),
        lastName: String(dto?.lastname ?? ''),
        balance: Number(dto?.balance) || 0,
        status: String(dto?.status ?? 'unknown'),
        registeredAt: String(dto?.date_reg ?? ''),
    };
}
