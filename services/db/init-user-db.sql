CREATE ROLE postgresdev WITH LOGIN PASSWORD 'postgresdev';
CREATE DATABASE prayer_praise_app_dev;
GRANT ALL PRIVILEGES ON DATABASE prayer_praise_app_dev TO postgresdev;
