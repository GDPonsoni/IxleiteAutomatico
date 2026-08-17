#!/bin/bash

# Script para iniciar o Ixleite Automático

echo "🏠 Ixleite Automático - Escala de Limpeza"
echo "========================================="
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo ""

# Instalar dependências se não existirem
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Instalando dependências..."
    cd backend
    npm install
    cd ..
    echo "✅ Dependências instaladas"
    echo ""
fi

# Iniciar o servidor
echo "🚀 Iniciando servidor..."
echo "📱 Acesse: http://localhost:3000"
echo ""
echo "Pressione Ctrl+C para encerrar"
echo ""

cd backend
npm start
