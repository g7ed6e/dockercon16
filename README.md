# Cadavres Exquis from "DockerCon 2016 edition" port to AspNetCore 1.1.0

## Default usage

### Setup (build and run AspNetCore app within docker)

```
docker-compose build
```

### Start

```
docker-compose up -d
```
Open a browser on [http://localhost](http://localhost). Refresh. It should always be the same random sentence.

### Scale the backend

```
docker-compose scale words-api=20
```
Open a browser on [http://localhost](http://localhost). Refresh. It should be a new random sentence each time.

## Alternate usage

Please see [https://blogs.msdn.microsoft.com/stevelasker/2016/09/29/building-optimized-docker-images-with-asp-net-core/](https://blogs.msdn.microsoft.com/stevelasker/2016/09/29/building-optimized-docker-images-with-asp-net-core/)

### Setup (build AspNetCore in a dedicated container then use optimized aspnetcore image)

```
docker-compose -f docker-compose-build.yml up
docker-compose -f docker-compose-optimized.yml build
```

### Start

```
docker-compose -f docker-compose-optimized.yml up -d
```
Open a browser on [http://localhost](http://localhost). Refresh. It should always be the same random sentence.

### Scale the backend

```
docker-compose -f docker-compose-optimized.yml scale words-api=20
```
Open a browser on [http://localhost](http://localhost). Refresh. It should be a new random sentence each time.
