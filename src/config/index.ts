import 'dotenv/config'

const { DB_URI: C_DB_URI, NODE_ENV: C_NODE_ENV, PORT: C_PORT } = process.env

const ensureEnv = (env: string | undefined, name: string) => {
  if (!env) throw new Error(`${name} env is not defined`)

  return env
}

const DB_URI = ensureEnv(C_DB_URI, 'DB_URI')
const NODE_ENV = ensureEnv(C_NODE_ENV, 'NODE_ENV')
const PORT = ensureEnv(C_PORT, 'PORT')

export { DB_URI, NODE_ENV, PORT }
