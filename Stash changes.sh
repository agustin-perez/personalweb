#!/bin/bash
export LANG=C.UTF-8
tput setaf 5
echo -e "Si no hizo cambios pero visual automaticamente toca algo y no deja actualizar, \npresione enter, de lo contrario cierre esta ventana. \nEste script manda los cambios a un directorio \"escondido\" \ndentro del repositorio."
read
tput setaf 1
git stash push
if [ $? -eq "0" ]
then 
	tput setaf 2
	echo "Listo!"	
	read
else 
	tput setaf 1
	echo "Error de actualización, verifique RED."
	read
fi
tput sgr0