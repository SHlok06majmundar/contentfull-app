/**
 * This script helps prepare the project for Vercel deployment
 * by checking configuration files and dependencies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Preparing project for Vercel deployment...');

// Check for necessary files
const requiredFiles = [
  '.env.example',
  'next.config.js',
  'vercel.json',
  'app/api/health/route.ts'
];

console.log('\nChecking for required files:');
let hasAllFiles = true;
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`- ${file}: ${exists ? '✓' : '✗'}`);
  if (!exists) hasAllFiles = false;
});

// Check vercel.json
console.log('\nVerifying vercel.json configuration:');
try {
  const vercelConfig = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'vercel.json'), 'utf8'));
  const hasAppFunctions = vercelConfig.functions && vercelConfig.functions['app/api/**/*'];
  console.log(`- Functions configuration for app/api routes: ${hasAppFunctions ? '✓' : '✗'}`);
  if (!hasAppFunctions) hasAllFiles = false;
} catch (error) {
  console.error('Error reading vercel.json:', error.message);
  hasAllFiles = false;
}

// Check package.json for ESLint dependencies
console.log('\nChecking ESLint dependencies:');
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
const hasESLint = packageJson.devDependencies && packageJson.devDependencies.eslint;
console.log(`- ESLint installed: ${hasESLint ? '✓' : '✗'}`);
if (!hasESLint) hasAllFiles = false;

// Output summary
console.log('\nDeployment Preparation Summary:');
if (hasAllFiles) {
  console.log('✅ All required configurations appear to be in place for Vercel deployment.');
  console.log('🚀 You can now deploy your project to Vercel!');
} else {
  console.log('❌ Some required configurations are missing. Please fix the issues above before deploying.');
}

console.log('\nReminder: Make sure all required environment variables are added to your Vercel project settings.');
