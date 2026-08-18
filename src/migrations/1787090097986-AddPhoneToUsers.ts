import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneToUsers1787090097986 implements MigrationInterface {
    name = 'AddPhoneToUsers1787090097986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
