import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const existing = await this.userRepository.findOneBy({ email: createUserDto.email });
        if (existing) {
            throw new ConflictException('El email ya está registrado');
        }
        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.findOne(id);
        const updated = Object.assign(user, updateUserDto);
        return await this.userRepository.save(updated);
    }

    async remove(id: string): Promise<void> {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
    }
}