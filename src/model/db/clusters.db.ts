import { ErrorException } from 'src/error_handler/error-exception';
import { Cluster } from '../interface/ICluster';
import { Clusters } from '../entity/Clusters';
// import { pool } from '../postgres-connect';
import { AppDataSource } from '../postgres-connect';

export const clustersDB: any = {};

const clusterRepository = AppDataSource.getRepository(Clusters);

// get clusters
clustersDB.getClusters = async () => {
  try {
    // const { rows } = await pool.query(`
    // SELECT *
    // FROM clusters
    // `);

    const rows = await clusterRepository.find();

    return rows;
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

// create one cluster
clustersDB.createOne = async (cluster: Cluster) => {
  try {
    // const { rows } = await pool.query(`
    // INSERT INTO clusters
    // VALUES ('${cluster.name}', '${cluster.postcode}')
    // `);

    const new_cluster = new Clusters();
    new_cluster.name = cluster.name;
    new_cluster.postcode = cluster.postcode;

    const rows = await clusterRepository.save(new_cluster);

    return rows;
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

// update a cluster
clustersDB.updateOne = async (cluster: any) => {
  try {
    // const { rows } = await pool.query(`
    //   UPDATE clusters
    //   SET
    //     name = '${cluster.newName}',
    //     postcode = '${cluster.postcode}'
    //   WHERE name = '${cluster.name}'
    //   `);

    const clusterToUpdate = await clusterRepository.findOneBy({
      name: cluster.name
    });

    if (clusterToUpdate) {
      clusterToUpdate.name = cluster.newName;
      clusterToUpdate.postcode = cluster.postcode;

      const updatedDriver = clusterRepository.save(clusterToUpdate);

      return updatedDriver;
    }

    return '';
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

// delete a cluster
clustersDB.deleteOne = async (clusterName: string) => {
  try {
    // const { rows } = await pool.query(`
    //     DELETE FROM clusters
    //     WHERE name = '${clusterName}'
    //     `);

    const clusterToRemove = await clusterRepository.findOneBy({
      name: clusterName
    });

    if (clusterToRemove) {
      const removedCluster = await clusterRepository.remove(clusterToRemove);
      return removedCluster;
    }

    return '';
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};
