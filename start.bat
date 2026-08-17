@echo off
setlocal EnableExtensions

REM Script para iniciar o Ixleite Automático no Windows

echo.
echo Ixleite Automático - Escala de Limpeza
echo ======================================
echo.

set "SCRIPT_DIR=%~dp0"
set "BACKEND_DIR=%SCRIPT_DIR%backend"

REM Verificar se Node.js está instalado; se não estiver, tentar instalar via winget
where node >nul 2>nul
if errorlevel 1 (
    echo Node.js nao foi encontrado.
    call :InstallNode
    if errorlevel 1 (
        echo.
        echo Instale manualmente em: https://nodejs.org/
        pause
        exit /b 1
    )
)

where node >nul 2>nul
if errorlevel 1 (
    echo.
    echo Node.js continua indisponivel depois da instalacao.
    pause
    exit /b 1
)

for /f "delims=" %%i in ('node --version') do set "NODE_VERSION=%%i"
echo Node.js encontrado: %NODE_VERSION%
echo.

where npm >nul 2>nul
if errorlevel 1 (
    echo npm nao foi encontrado.
    pause
    exit /b 1
)

REM Instalar dependencias se nao existirem
if not exist "%BACKEND_DIR%\node_modules" (
    echo Instalando dependencias...
    pushd "%BACKEND_DIR%"
    call npm install
    if errorlevel 1 (
        popd
        echo.
        echo Falha ao instalar dependencias.
        pause
        exit /b 1
    )
    popd
    echo Dependencias instaladas.
    echo.
)

REM Iniciar o servidor
echo Iniciando servidor...
echo Acesse: http://localhost:3000
echo.
echo Pressione Ctrl+C para encerrar
echo.

pushd "%BACKEND_DIR%"
call npm start
set "EXIT_CODE=%errorlevel%"
popd

pause
exit /b %EXIT_CODE%

:InstallNode
where winget >nul 2>nul
if errorlevel 1 (
    echo.
    echo winget nao esta disponivel neste Windows.
    exit /b 1
)

echo.
echo Instalando Node.js LTS via winget...
winget install --id OpenJS.NodeJS.LTS -e --source winget --accept-package-agreements --accept-source-agreements
if errorlevel 1 (
    echo.
    echo A instalacao automatica do Node.js falhou.
    exit /b 1
)

exit /b 0
