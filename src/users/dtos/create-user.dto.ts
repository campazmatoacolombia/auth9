import { IsEmail, IsString, IsBoolean, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan Perez', description: 'Nombre completo del usuario' })
  @IsString()
  @MaxLength(100)
  name!: string;

  @ApiProperty({ example: 'juan@test.com', description: 'Correo electrónico único' })
  @IsEmail()
  @MaxLength(150)
  email!: string;

  @ApiProperty({ example: '123456', description: 'Contraseña, mínimo 6 caracteres' })
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  contraseña!: string;

  @ApiPropertyOptional({ example: true, description: 'Si el usuario está activo' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}