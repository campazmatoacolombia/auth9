import { MigrationInterface, QueryRunner } from "typeorm";

export class Nuevamigracion21787784345631 implements MigrationInterface {
    name = 'Nuevamigracion21787784345631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test2" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test2"`);
    }

}
