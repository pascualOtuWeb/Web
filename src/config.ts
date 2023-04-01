import { config } from "dotenv"

config()
//console.log(process.env.PORT)

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'projet-bda'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'rKScXVAw1jef0'
export const DB_HOST = process.env.DB_HOST || 'sql.sur.ovh'
export const DB_DATABASE = process.env.DB_DATABASE || 'projet-bda'
