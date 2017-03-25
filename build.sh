#!bin/bash
set -e
dotnet restore words-aspnet/words-aspnet.csproj
rm -rf $(pwd)/publish/words-aspnet
dotnet publish words-aspnet/words-aspnet.csproj -c release -o $(pwd)/publish/words-aspnet
#dotnet publish words-aspnet/words-aspnet.csproj --output /out/ --configuration Release