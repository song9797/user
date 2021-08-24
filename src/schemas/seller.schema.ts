import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SellerDocument = Seller & Document;

@Schema()
export class Seller {
  @Prop()
  userid: string;
  @Prop()
  name: string;
  @Prop()
  password: string;
  @Prop()
  address: string;
  @Prop()
  phonenumber: string;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);