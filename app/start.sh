rm -rf /app/api/node_modules
rm -rf /app/api/build
cd /app/api
npm install
npm run build
rm -rf /app/api/node_modules
npm install --only=prod
cd /app/api
npm run start