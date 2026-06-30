import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_')

  const processEnvDefines = Object.fromEntries(
    Object.entries(env).map(([key, value]) => [
      `process.env.${key}`,
      JSON.stringify(value),
    ])
  )

  return {
    plugins: [react()],
    define: processEnvDefines,
  }
})
