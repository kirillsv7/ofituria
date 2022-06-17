Install and launch:
```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs

cp .env.example .env

./vendor/bin/sail up -d

./vendor/bin/sail artisan key:generate

./vendor/bin/sail artisan migrate:fresh --seed

./vendor/bin/sail npm install

./vendor/bin/sail npm run dev
```

Visit http://localhost

API REST:
```
Index GET: /api/product
Store POST: /api/product
Show GET: /api/product/{id}
Update PUT: /api/product/{id}
Destroy: DELETE: /api/product/{id}
```

Stop app:

```
./vendor/bin/sail down
```