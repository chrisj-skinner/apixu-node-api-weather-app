# Apixu Node api Weather App

Apixu Node api Weather App is a node app with a difference - displaying the current weather report for a given location(s) in an extremely polite (totally non sarcastic) English way.

### Version
0.0.1

### Tech

Apixu Node api Weather App uses the following weather api.

* [http://www.apixu.com/] [APIXU]

### Installation

You need Node installed globally:

[node.js] [NODE]

Type:

```sh
$ node app.js
```

followed by any of the following queries:

  - city name e.g.: q=Paris
  - US zip e.g.: q=10001
  - UK postcode e.g: q=SW1
  - Canada postal code e.g: q=G2J
  - Latitude and Longitude e.g: q=48.8567,2.3508
  - metar:<metar code> e.g: q=metar:EGLL
  - iata:<3 digit airport code> e.g: q=iata:DXB
  - auto:ip IP lookup e.g: q=auto:ip
  - IP address e.g: q=100.0.0.1

E.G

```sh
$ node app.js London 14025 IV26TW
```

### Development

This app is currently under Development with the following todo list:

  - Add x number of day(s) detailed forecast for location(s)
  - Develop into a Web App
    - Add search functionalitly within Web App
  - AND finally, to enhance the personalitly and sacasmometer of the app

Feel free to clone this repo and develop it to how you see fit!

```sh
$ git clone https://github.com/chrisj-skinner/apixu-node-api-weather-app.git
```

License
----

MIT

  [APIXU]: <http://www.apixu.com/>
  [NODE]: <https://nodejs.org/en/>