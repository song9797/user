import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuyerDocument = Buyer & Document;

@Schema()
export class Buyer {
  @Prop()
  userid: string;
  @Prop()
  name: string;
  @Prop()
  password: string;
  @Prop()
  phonenumber: string;
  @Prop()
  business_number: string;
  @Prop()
  account_number: number;
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);