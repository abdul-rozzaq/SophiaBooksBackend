import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCashboxDto {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean

    @IsNumber()
    @IsNotEmpty()
    shop_id: number
}
