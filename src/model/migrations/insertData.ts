import { MigrationInterface, QueryRunner } from 'typeorm';

export class new1680009785240 implements MigrationInterface {
  name = 'new1680009785240';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO Clusters VALUES
                          ('A', '10'),
                          ('B', '11'),
                          ('C', '16')`);

    await queryRunner.query(`INSERT INTO Drivers VALUES
    ('Moe', 'A'),
    ('Larry', 'B'),
    ('Curly', 'C')`);

    await queryRunner.query(`INSERT INTO Orders VALUES
    ('A1A', '10', '10041'),
    ('B2B', '11', '11332'),
    ('C3C', '10', '10042'),
    ('D4D', '11', '11342'),
    ('E5E', '11', '11444'),
    ('F6F', '16', '16788'),
    ('G7G', '16', '16788'),
    ('H8H', '10', '10043'),
    ('I9I', '16', '16800'),
    ('J0J', '16', '16801')
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
