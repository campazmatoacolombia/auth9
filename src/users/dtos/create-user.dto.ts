import { IsEmail, IsString, IsBoolean, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsEmail()
  @MaxLength(150)
  email!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}