FROM python:3.9-slim
#RUN yum install pkgconfig
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y gcc default-libmysqlclient-dev pkg-config \
    && rm -rf /var/lib/apt/lists/*

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

RUN pip install --upgrade pip

RUN apt-get update
RUN apt-get install -y gnupg
RUN apt-get install -y lsb-release

RUN apt-get install -y mariadb-client

COPY requirements.txt /backend/

RUN pip install -r requirements.txt

COPY . /backend/

EXPOSE 8000

RUN python manage.py collectstatic

RUN python manage.py makemigrations

RUN python manage.py migrate

CMD ["python", "manage.py", "runserver"]

