import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsPhoneUnique } from '../validators/is-phone-unique.validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  second_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Telefon raqam kiritilishi shart' })
  @Validate(IsPhoneUnique, { message: 'Bu telefon raqami allaqachon mavjud!' })
  phone: string;


  @IsString()
  @IsNotEmpty()
  password: string;

  profile_image: string;
}
