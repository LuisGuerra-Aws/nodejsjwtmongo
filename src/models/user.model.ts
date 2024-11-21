/* eslint-disable prettier/prettier */
import { Schema, Document } from 'mongoose';

type UserDocument = Document & {
    fullName : string;
    email : string;
    password : string;
};

type UserInput = {
    fullName: UserDocument['fullName'];
    email: UserDocument['email'];
    password: UserDocument['password'];    
}

const usersSchema = new Schema(
  {
    fullName: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    collection: 'usersmongojwt',
    timestamps: true,    
  },
);


export { UserInput, UserDocument, usersSchema};