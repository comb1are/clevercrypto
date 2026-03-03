

export interface PlatformDTO {
    id: string;
    name: string;
    domain: string;
    status: string; 
    logo: string;
    percent?: string;
}

export interface StoreDTO {
    id: string;
    type: string; 
    name: string;
    domain: string;
    badge: string;
    status: string; 
    logo: string;
    has_error: boolean;
    percent?: number;
}

export interface BusinessPaymentDTO {
    id: number;
    icon: string;
    title: string;
    date: string;
    price: string;
    type: string; 
    warning: boolean;
}
