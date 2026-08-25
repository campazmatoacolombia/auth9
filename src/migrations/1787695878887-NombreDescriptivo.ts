import { MigrationInterface, QueryRunner } from "typeorm";

export class NombreDescriptivo1787695878887 implements MigrationInterface {
    name = 'NombreDescriptivo1787695878887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "nombre"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "nombre" TO "name"`);
    }

}
