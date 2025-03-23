FROM ubuntu:24.04
ENV TZ=Europe/Warsaw

RUN apt-get update && apt-get install -y \
    python3.10 python3-pip \
    openjdk-8-jdk \
    kotlin \
    sqlite3 \
    wget \
    unzip

RUN update-alternatives --set java /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java

RUN wget https://services.gradle.org/distributions/gradle-8.7-bin.zip -P /tmp \
    && unzip -d /opt/gradle /tmp/gradle-8.7-bin.zip \
    && ln -s /opt/gradle/gradle-8.7/bin/gradle /usr/bin/gradle

WORKDIR /app

COPY . .

RUN gradle clean build

CMD ["gradle", "run"]
