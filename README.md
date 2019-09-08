## About Eathis 

- Backend : django rest framework, postgresql, gunicorn, nginx
- Frontend : react
- Deploy : Heroku, Docker

## Development

### Backend

```
./d build
./d start
```

or (windows system)

```
sh d build
sh d start
```

### Frontend
```
cd client
yarn
yarn run start
```

## Deployment (heroku CLI)

```
heroku login
heroku addons:create heroku-postgresql:hobby-dev -a eathis
heroku buildpacks:add heroku/nodejs -a eathis
heroku buildpacks:add heroku/python -a eathis
heroku config:set SECRET_KEY='123' -a eathis
git remote add https://git.heroku.com/eathis.git
git push heroku master
```
