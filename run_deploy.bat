@echo off
echo ===================================================
echo Starting Vercel Deployment for Saishnaa Website...
echo ===================================================
set "PATH=%~dp0node-portable;%PATH%"
if "%VERCEL_TOKEN%"=="" (
  echo Error: Please set the VERCEL_TOKEN environment variable before deploying.
  echo Example: set VERCEL_TOKEN=your_vercel_token
  pause
  exit /b 1
)
echo Deploying files to Vercel...
node deploy.js
echo.
echo Deployment process finished.
pause
