export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address
    phone: string;
    website: string;
    company: Company
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

// could make "geo" a separate interface, but it only has lng and lat

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}