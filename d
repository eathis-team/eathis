#!/bin/bash

cd "$(dirname $0)"

task=$1 # More descriptive name
arg=$2
args=${*:2}

case $task in
    build)
        # Build docker containers. Pass --no-cache to force re-downloading of images.
        # See ./d build --help for additional info

        if [ ! -f .env ]; then
          cp .env.example .env
        fi
        docker-compose build $args
        ;;
    start)
        # Start docker containers.
        # See ./d up --help for additional info
        docker-compose up $args
        ;;
    stop)
        # Stop docker containers.
        docker-compose stop
        ;;
    clean)
        # Remove docker containers (if they exist)
        if docker inspect eathis-db > /dev/null 2> /dev/null; then
            docker rm -f eathis-db
        fi
        if docker inspect eathis-db-test > /dev/null 2> /dev/null; then
            docker rm -f eathis-db-test
        fi
        if docker inspect eathis > /dev/null 2> /dev/null; then
            docker rm -f eathis
        fi
        if docker image inspect eathis-db > /dev/null 2> /dev/null; then
            docker rmi eathis-db
        fi
        if docker image inspect eathis > /dev/null 2> /dev/null; then
            docker rmi eathis
        fi
        ;;
    bash)
        # SSH (bash) into server container.
        # Useful for running Django shell commands.
        docker exec -it eathis bash
        ;;
    bashdb)
        # SSH (bash) into database container.
        # Useful for running commands directly against database.
        docker exec -it eathis-db bash
        ;;
    shell)
        # SSH (bash) into server container.
        # Useful for running Django shell commands.
        docker exec -it eathis python manage.py shell
        ;;
    lint)
        # Lint server code automatically with autopep8.
        # WARNING: This updates files in-place.
        docker exec -it eathis autopep8 . --in-place --recursive --global-config setup.cfg
        ;;
    dbshell)
        # SSH (bash) into database container.
        # Useful for running postgres commands.
        docker exec -it eathis-db psql -U postgres
        ;;
    cleandb)
        # Drop the local database.
        docker exec -it db psql -U postgres eathisdb -c
        docker exec -it db psql -h db -U postgres -c "DROP DATABASE IF EXISTS eathisdb"
        ;;
    migrate)
        # Run database migrations.
        docker exec -it eathis python manage.py migrate $args
        ;;
    test)
        # Run the tests against a test database, from a test container.
        # Useful for running Django shell commands.
        if ! docker inspect eathis-db-test > /dev/null 2> /dev/null; then
             docker run \
                --detach \
                --name eathis-db-test \
                --env-file=.env \
                postgres
        fi

        docker start eathis-db-test > /dev/null

        # in a while loop wait for the db test container to really start
        until docker exec -it eathis-db-test psql -U postgres -c '\q' > /dev/null 2> /dev/null; do
            sleep 0.5
        done

        docker exec -it eathis-db-test psql -U postgres -c "DROP DATABASE IF EXISTS eathisdb"
        docker exec -it eathis-db-test psql -U postgres -c "CREATE DATABASE eathisdb"

        docker run \
            -it --rm \
            --name eathis-test \
            --link eathis-db-test:db \
            -v $(pwd):/eathis:rw \
            --env-file=.env \
            -e IS_TESTING=true \
            eathis \
            test $args
        ;;
    '')
        echo 'Usage: ./d action [params]. For a list of actions, run ./d help'
        ;;
    *)
        echo 'Unknown action '$task'. For a list of the available actions, run ./d help'
        ;;
esac