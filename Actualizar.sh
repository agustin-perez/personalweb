#!/bin/bash
export LANG=C.UTF-8
tput setaf 5
echo -e "Asegurese de que nadie esta tocando un archivo que usted modifico en la misma \nrama, ya que puede generar conflictos."
echo "Presione enter para continuar, o cierre esta ventana si no quiere continuar."
read a 
tput setaf 1
git pull 
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