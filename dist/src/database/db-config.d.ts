import pgPromise from "pg-promise";
declare const db: pgPromise.IDatabase<{}, import("pg-promise/typescript/pg-subset").IClient>;
export default db;
