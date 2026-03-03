import type { PlatformDTO, StoreDTO, BusinessPaymentDTO } from '../dto/business.dto';
import type { Platform, Store, BusinessPayment } from '../models/business.model';

const VALID_STATUSES = new Set(['approved', 'pending', 'blocked']);
const VALID_TYPES = new Set(['simple', 'detailed']);

export function mapPlatformFromDTO(dto: PlatformDTO): Platform {
    const rawStatus = String(dto?.status ?? 'pending').toLowerCase();
    return {
        id: String(dto?.id ?? ''),
        name: String(dto?.name ?? ''),
        domain: String(dto?.domain ?? ''),
        status: VALID_STATUSES.has(rawStatus) ? rawStatus as Platform['status'] : 'pending',
        logo: String(dto?.logo ?? ''),
        percent: dto?.percent != null ? String(dto.percent) : undefined,
    };
}

export function mapStoreFromDTO(dto: StoreDTO): Store {
    const rawStatus = String(dto?.status ?? 'pending').toLowerCase();
    const rawType = String(dto?.type ?? 'simple').toLowerCase();
    return {
        id: String(dto?.id ?? ''),
        type: VALID_TYPES.has(rawType) ? rawType as Store['type'] : 'simple',
        name: String(dto?.name ?? ''),
        domain: String(dto?.domain ?? ''),
        badge: String(dto?.badge ?? ''),
        status: VALID_STATUSES.has(rawStatus) ? rawStatus as Store['status'] : 'pending',
        logo: String(dto?.logo ?? ''),
        hasError: Boolean(dto?.has_error),
        percent: dto?.percent != null ? Number(dto.percent) || 0 : undefined,
    };
}

export function mapBusinessPaymentFromDTO(dto: BusinessPaymentDTO): BusinessPayment {
    return {
        id: Number(dto?.id) || 0,
        icon: String(dto?.icon ?? ''),
        title: String(dto?.title ?? ''),
        date: String(dto?.date ?? ''),
        price: String(dto?.price ?? ''),
        type: dto?.type === 'success' ? 'success' : '',
        warning: Boolean(dto?.warning),
    };
}
