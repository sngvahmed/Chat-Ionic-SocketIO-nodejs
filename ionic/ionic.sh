#!/bin/bash

help(){
    echo "===================================================="
    echo "************************************"
    echo " 1) install requirement"
    echo " 2) generate ionic 1"
    echo " 3) generate ionic 2"
    echo "************************************"

    echo "************  Testing **************"
    echo " 4) run on IOS "
    echo " 5) run on ANDROID "
    echo " 6) run on WEB "

    echo "********  Configuration ************"
    echo " 7) config IOS "
    echo " 8) config Android "
    echo "===================================================="
}

install_requirement(){
    npm install -g cordova
    npm install -g ionic
}

generate_ionic_1_app(){
    echo "Enter your project name : "
    read proj_name
    ionic start $proj_name blank --type ionic1
}

generate_ionic_2_app(){
    echo "Enter your project name : "
    read proj_name
    echo " write tyoe : "
    echo "tabs : a simple 3 tab layout"
    echo "sidemenu: a layout with a swipable menu on the side"
    echo "blank: a bare starter with a single page"
    echo "super: starter project with over 14 ready to use page designs"
    echo "tutorial: a guided starter project"
    read proj_type
    ionic start $proj_name $proj_type
}

configure_platform_android(){
    ionic cordova platform add android
}

configure_platform_ios(){
    ionic cordova platform add ios
    ionic cordova build ios
}

test_ios(){
    ionic cordova emulate ios
}

test_android(){
    echo "Enter your Android Deveice name : "
    read proj_nameDevice
    ionic cordova run $proj_nameDevice
}

test_web_application(){
    ionic serve
}

help

read -p "Chouse action number : " number

if [ "$number" -eq "1" ]; then
    install_requirement
elif [ "$number" -eq "2" ]; then
    generate_ionic_1_app
elif [ "$number" -eq "3" ]; then
    generate_ionic_2_app
elif [ "$number" -eq "4" ]; then
    test_ios
elif [ "$number" -eq "5" ]; then
    test_android
elif [ "$number" -eq "6" ]; then
    test_web_application
elif [ "$number" -eq "7" ]; then
    configure_platform_ios
elif [ "$number" -eq "8" ]; then
    configure_platform_android
fi
