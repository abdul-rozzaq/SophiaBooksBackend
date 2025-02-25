import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { User } from '../user.model';

@Injectable()
@ValidatorConstraint({ async: true }) // Asinxron tekshiruv uchun
export class IsPhoneUnique implements ValidatorConstraintInterface {
  async validate(phone: string) {
    const existingUser = await User.findOne({ where: { phone } });
    return !existingUser; // Agar user topilmasa => true, aks holda false
  }

  defaultMessage(args: ValidationArguments) {
    return `Ushbu telefon raqami (${args.value}) allaqachon mavjud!`;
  }
}
