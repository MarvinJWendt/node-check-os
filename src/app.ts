export function getPlatform() {
  return process.platform
}

export const isWindows: boolean = (getPlatform() === 'win32')
export const isMacOS: boolean = (getPlatform() === 'darwin')
export const isLinux: boolean = (getPlatform() === 'linux')
export const isSunOS: boolean = (getPlatform() === 'sunos')
export const isFreeBSD: boolean = (getPlatform() === 'freebsd')