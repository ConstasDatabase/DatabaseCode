FROM python:3.9-slim
#RUN yum install pkgconfig
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y gcc default-libmysqlclient-dev pkg-config \
    && rm -rf /var/lib/apt/lists/*

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

RUN pip install --upgrade pip

COPY requirements.txt /backend/

RUN pip install -r requirements.txt

COPY . /backend/

EXPOSE 7990

RUN python manage.py makemigrations

RUN python manage.py migrate

