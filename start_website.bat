@echo off
title Saishnaa Website Local Server
cd /d "%~dp0"
set "PATH=%~dp0node-portable;%PATH%"
set PORT=8080

echo ==========================================
echo Starting Saishnaa Website on port %PORT%
echo ==========================================
echo.
echo Keep this window open while using the website.
echo If you close this window, localhost will stop working.
echo.

start "" cmd /c "timeout /t 2 >nul && start http://localhost:%PORT%/journal-details.html"
node server.js

echo.
echo Server stopped.
pause
