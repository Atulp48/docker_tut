<!-- for login acceess -->

docker login
docker logout

<!--docker cmd  -->

docker build -t usrname/hey-nodejs:0.0.1.RELEASE .
docker container run -d -p 4000:3000 usrname/hey-nodejs:0.0.1.RELEASE
4000-> is your local port
3000->docker port

docker container ls
docker container stop name
docker container start name
docker push usrname/hey-nodejs:0.0.1.RELEASE

<!-- pull request -->

docker pull usrname/hey-nodejs:0.0.1.RELEASE
docker container run -d -p 4000:3000 usrname/hey-nodejs:0.0.1.RELEASE

<!--docker env create build  -->

docker build -t newapp .
docker run -d --name nowapp -e DB_URL='MONGO_URL' -e N_URL2='URL2' -p 4000:3000 newapp

docker container stop nowapp
docker container start nowapp
docker tag newapp usrname/newapp
docker images
docker push usrname/newapp
docker pull usrname/newapp
docker run -d --name nowapp -e DB_URL='MONGO_URL' -p 4000:3000 username/newapp
docker run -d --name nowapp -e DB_URL='MONGO_URL' -e DB_URL2='MONGO_URL2' -p 4000:3000 username/newapp

<!-- see contaners and images -->

docker ps -a
docker ps
docker images
docker logs <container_name_or_id>

<!-- when your image have already have .env file -->

docker run -d --env-file .env --name nowapp atulp123/newapp
