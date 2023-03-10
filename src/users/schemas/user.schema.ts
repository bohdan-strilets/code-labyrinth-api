import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../roles/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: new Date() })
  dateBirth: Date;

  @Prop({ default: 'other', enum: ['man', 'woman', 'other'] })
  gender: 'man' | 'woman' | 'other';

  @Prop({ default: null })
  description: string;

  @Prop({ default: null })
  profession: string;

  @Prop({ default: null })
  phoneNumber: string;

  @Prop({ default: {} })
  location: any;

  @Prop({ default: {} })
  socialNetworks: any;

  @Prop({ default: {} })
  rating: any;

  @Prop({ default: [], type: [String] })
  hobby: string[];

  @Prop({ required: true })
  avatarURI: string;

  @Prop({ required: true })
  posterURI: string;

  @Prop({ required: true })
  activationToken: string;

  @Prop({ default: false })
  isActivated: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
