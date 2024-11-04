FROM php:8.3-fpm

# コンテナ内の/usr/local/etc/php/ディレクトリへ
COPY php.ini /usr/local/etc/php

# パッケージ関連
RUN apt-get update
RUN apt-get -y install libzip-dev
RUN docker-php-ext-install zip
RUN docker-php-ext-install zip pdo_mysql
RUN apt-get -y install cron

# composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

WORKDIR /var/www/larasand

# Laravelのインポート
RUN composer global require "laravel/installer"
