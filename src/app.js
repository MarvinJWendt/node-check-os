"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPlatform() {
    return process.platform;
}
exports.getPlatform = getPlatform;
exports.isWindows = (getPlatform() === 'win32');
exports.isMacOS = (getPlatform() === 'darwin');
exports.isLinux = (getPlatform() === 'linux');
exports.isSunOS = (getPlatform() === 'sunos');
exports.isFreeBSD = (getPlatform() === 'freebsd');
