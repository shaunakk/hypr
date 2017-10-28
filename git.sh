DATE=`date +%m-%d-%Y`
git add .
git commit -m $DATE
git pull
git push origin master
git push heroku master

