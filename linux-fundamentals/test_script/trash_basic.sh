# !/bin/bash
 
if  [ "$#" -gt "0" ]
then
    if [[ -f $1 ]] || [[ -d $1 ]]
    then
        mv $1 ~/temp_delete
        echo "Moved $1 to ~/temp_delete"
    else
        echo "$1 does not exist. Please try again"
    fi
else
    echo "Nothing to delete"
fi