export class BuyerDto{
    readonly id: string;
    readonly name: string;
    readonly password: string;
    readonly address: string;
    readonly phonenumber: string;
}
export class SellerDto{
    readonly id: string;
    readonly name: string;
    readonly password: string;
    readonly phonenumber: string;
    readonly business_number: string;
    readonly account_number: number;
}