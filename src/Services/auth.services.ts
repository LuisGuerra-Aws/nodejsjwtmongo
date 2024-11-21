import { UserInput } from '../models/user.model'
import { UserRepository } from '../Repositories/user.repository';
import * as bcrypt from 'bcryptjs';
import { generateToken } from "./token.services";

export const registerUserService = async( userInput : UserInput) => {

    userInput.password = bcrypt.hashSync(userInput.password, 10);
    const usercreated = await UserRepository.create(userInput);
    return ( { data : usercreated} );
}

export const authenticateUserService = async( email : string, passwordFind : string) => {

    const userFind = await UserRepository.findOne( { email });

    if (!userFind){
        console.log('no found');
        return null;
    }

    const isMatch : boolean = bcrypt.compareSync(passwordFind, userFind.password);
    if (!isMatch){
        console.log('no match');

        return null;
    }

    const tokenjwt = generateToken(userFind.id);
    return tokenjwt;
}