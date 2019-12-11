#!/bin/bash
export LANG=C.UTF-8
tput setaf 5
echo "Asegurese de actualizar antes de subir cualquier cosa."
git add . -A
echo "Escriba el commit de la subida: "
tput setaf 6
read comm
tput setaf 1
git commit -m "$comm"
git push origin master
tput setaf 2
if [ $? -eq "0" ]
then 
	echo "Listo! Presione enter para salir."
	read
else
	echo -e "Error de subida, verifique conexión de red o \nejecute script Stashear."
	read
fi 
tput sgr0
