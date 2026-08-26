import { MigrationInterface, QueryRunner } from "typeorm";

export class NuevaColumna1787779447745 implements MigrationInterface {
    name = 'NuevaColumna1787779447745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
    }

}
