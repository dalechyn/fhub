import { findUp } from 'find-up'

export async function getIsUsingTypeScript() {
  try {
    const cwd = process.cwd()
    const tsconfig = await findUp(
      [
        'tsconfig.json',
        'tsconfig.base.json',
        'tsconfig.lib.json',
        'tsconfig.node.json',
      ],
      { cwd },
    )
    if (tsconfig) return true

    const fhubConfig = await findUp(['fhub.config.ts', 'fhub.config.mts'], {
      cwd,
    })
    if (fhubConfig) return true

    return false
  } catch {
    return false
  }
}
