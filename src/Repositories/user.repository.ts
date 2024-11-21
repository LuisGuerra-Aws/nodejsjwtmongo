/* eslint-disable prettier/prettier */
import { UserDocument, usersSchema } from '../models/user.model';
import mongoose, { Model} from 'mongoose';

const UserRepository : Model<UserDocument> =mongoose.model<UserDocument>('UserRepository', usersSchema);

export { UserRepository };