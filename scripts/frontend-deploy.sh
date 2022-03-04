#!/bin/bash

FE_DIR=/home/ec2-user/deploy/frontend

echo "############################"
echo "### 프론트엔드 배포 시작 ###"
echo "############################"
echo ""

echo "###########################"
echo "# change build files 시작 #"
echo "###########################"
sudo rm -rf /usr/share/nginx/html/dist
sudo mv $FE_DIR/dist /usr/share/nginx/html/dist
echo "###########################"
echo "# change build files 종료 #"
echo "###########################"
echo ""

echo "############################"
echo "### 프론트엔드 배포 종료 ###"
echo "############################"
echo ""