export interface Buyer{
    id: string;
    name: string;
    password: string;
    address: string;
    phonenumber: string;
}
export interface Seller{
    id: string;
    name: string;
    password: string;
    phonenumber: string;
    business_number: string;
    account_number: number;
}