source bin/config.env
if (( $# != 1 )); then
  echo "please name your app!"
  exit
fi
export origport=$port
export origname=$appname
export freeport=$(ssh root@$server freeport.sh)
cp nginx/template.conf nginx/$1.conf
sed -i "" -e "s/55000/$origport/" server.js
sed -i "" -e "s/$origport/$freeport/" server.js
sed -i "" -e "s/app_name/$1/" nginx/$1.conf
sed -i "" -e "s/server_url/$server/" nginx/$1.conf
sed -i "" -e "s/port/$freeport/" nginx/$1.conf
sed -i "" -e "s/template/$1/" package.json
sed -i "" -e "s/app_name/$1/" bin/config.env
sed -i "" -e "s/$origname/$1/" bin/config.env
sed -i "" -e "s/$origport/$freeport/" bin/config.env
npm run build
sftp root@$server << EOF
  cd /etc/nginx/conf.d
  put nginx/$1.conf
  mkdir /var/www/html/$1
  cd /var/www/html/$1
  put server.js
  put package.json
  mkdir dist
  put -r dist
  bye
EOF
ssh root@$server << EOF
  cd /var/www/html/$1
  npm install --production
  pm2 start server.js --name $1
  service nginx stop
  /opt/letsencrypt/letsencrypt-auto certonly --standalone -d $1.$server
  service nginx start
EOF
rm -rf .git
git init
