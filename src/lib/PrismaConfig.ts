import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

export default class PrismaConfig {

  private static connectionString  = process.env.DATABASE_URL;

  private static adapter = new PrismaPg({
    connectionString: PrismaConfig.connectionString
  });

  public static prisma = new PrismaClient({
    adapter: PrismaConfig.adapter,
    log: ["error","query","info"]
  });
  
}

