import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateShopDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    owner_id: number;

    @IsInt()
    @IsNotEmpty()
    balance: number;
}
