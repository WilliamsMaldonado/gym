FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD master
ENV MYSQL_DATABASE gym
ENV MYSQL_USER user_service
ENV MYSQL_PASSWORD master

ADD init.sql /docker-entrypoint-initdb.d