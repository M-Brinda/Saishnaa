@echo off
echo Starting Saishnaa Software Solutions local server...
set "PATH=%~dp0node-portable;%PATH%"
npm run dev
pause
