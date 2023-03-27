import { ErrorException } from 'src/error_handler/error-exception';
import { Drivers } from '../entity/Drivers';
import { Driver } from '../interface/IDriver';
// import { pool } from '../postgres-connect';
import { AppDataSource } from '../postgres-connect';

export const driversDB: any = {};

const driversRepository = AppDataSource.getRepository(Drivers);

// get drivers
driversDB.getDrivers = async () => {
  try {
    //   const { rows } = await pool.query(`
    //   SELECT *
    //   FROM drivers
    //   `);

    const rows = await driversRepository.find();

    return rows;
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

// create one driver
driversDB.createOne = async (driver: Driver) => {
  try {
    // const { rows } = await pool.query(`
    // INSERT INTO drivers
    // VALUES ('${driver.name}', '${driver.cluster}')
    // `);

    const new_driver = new Drivers();
    new_driver.name = driver.name;
    new_driver.cluster = driver.cluster;

    const rows = await driversRepository.save(new_driver);

    return rows;
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

// update a driver
driversDB.updateOne = async (driver: Driver) => {
  try {
    // const { rows } = await pool.query(`
    //   UPDATE drivers
    //   SET
    //     name = '${driver.newName}',
    //     cluster = '${driver.cluster}'
    //   WHERE name = '${driver.name}'
    //   `);

    const driverToUpdate = await driversRepository.findOneBy({
      name: driver.name
    });

    if (driverToUpdate) {
      driverToUpdate.name = driver.name;
      driverToUpdate.cluster = driver.cluster;

      const updatedDriver = driversRepository.save(driverToUpdate);

      return updatedDriver;
    }

    return '';
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

//delete a driver
driversDB.deleteOne = async (driverName: string) => {
  try {
    // const { rows } = await pool.query(`
    //     DELETE FROM drivers
    //     WHERE name = '${driverName}'
    //     `);

    const driverToRemove = await driversRepository.findOneBy({
      name: driverName
    });

    if (driverToRemove) {
      const removedDriver = await driversRepository.remove(driverToRemove);
      return removedDriver;
    }

    return '';
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};
