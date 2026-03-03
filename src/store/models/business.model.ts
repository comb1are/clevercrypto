

export interface Platform {
    id: string;
    name: string;
    domain: string;
    status: 'approved' | 'pending' | 'blocked';
    logo: string;
    percent?: string;
}

export interface Store {
    id: string;
    type: 'simple' | 'detailed';
    name: string;
    domain: string;
    badge: string;
    status: 'approved' | 'pending' | 'blocked';
    logo: string;
    hasError: boolean;
    percent?: number;
}

export interface BusinessPayment {
    id: number;
    icon: string;
    title: string;
    date: string;
    price: string;
    type: 'success' | '';
    warning: boolean;
}
