FROM php:8.4
WORKDIR /var/www/html

COPY index.php . 

CMD ["php", "-S", "0.0.0.0:8000", "-t", "/var/www/html"]