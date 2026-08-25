import { MigrationInterface, QueryRunner } from "typeorm";

export class NombreDescriptivo1787689124918 implements MigrationInterface {
    name = 'NombreDescriptivo1787689124918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "password" TO "contraseña"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "contraseña" TO "password"`);
    }

}
