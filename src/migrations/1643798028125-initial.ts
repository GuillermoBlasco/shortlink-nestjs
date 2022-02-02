import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1643798028125 implements MigrationInterface {
    name = 'initial1643798028125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_shortlink" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "originalLink" character varying NOT NULL, "shortLink" character varying NOT NULL, CONSTRAINT "UQ_024ee0ce0a3caa8d7a8dbc41d18" UNIQUE ("shortLink"), CONSTRAINT "PK_0c7e8cb208e54943afa60880432" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_shortlink"`);
    }

}
