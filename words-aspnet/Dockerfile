FROM microsoft/dotnet:1.1.1-sdk
COPY . /app
WORKDIR /app
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 80/tcp
CMD ["dotnet", "run", "--server.urls", "http://*:80"]
