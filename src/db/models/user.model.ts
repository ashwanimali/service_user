import { model, Schema } from 'mongoose';
import schemaOption from 'src/config/schema.config';
import { base_schema } from './base.model';

const UserModel: Schema = new Schema(
  {
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    name: { type: String, trim: true },
    isAdmin: { type: Number, default: 0, trim: true },
    mobile: { type: String, required: true, trim: true, index: true },
    age: { type: String, trim: true },
    gender: { type: Number, trim: true },
    otp: { type: String, trim: true },
    password: { type: String, trim: true },
    token: { type: String },
    isDeleted: { type: Boolean, default: false },
    postalCode: { type: String, trim: true },
    locality: { type: String, trim: true },
    country: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
  },
  schemaOption,
).add(base_schema);

export default model('User', UserModel, 'users');
