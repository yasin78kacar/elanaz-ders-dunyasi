const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// assets/images/ — Metro statik require() ile paketlenir
config.watchFolders = [path.resolve(__dirname, 'assets')];

if (!config.resolver.assetExts.includes('jpeg')) {
  config.resolver.assetExts.push('jpeg');
}

module.exports = config;
