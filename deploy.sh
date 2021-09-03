#!/bin/bash
yarn build

echo "Conectando ao servidor"
ssh -t piique@pedrovilaca.com "cd desafio-framework.pedrovilaca.com/ ; ls | grep -v '.htaccess' | xargs rm -rf"
echo "Todos arquivos apagados"

echo "Iniciando copia de arquivos"
scp -r build/*  piique@pedrovilaca.com:~/desafio-framework.pedrovilaca.com/
echo -e "Deploy finalizado: \e[0;36m https://desafio-framework.pedrovilaca.com/ \e[00m"