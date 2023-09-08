This Weather-App was created by for WPR381:

    Albrecht Ohsiek
    
    Dale Willemse
    
    Divan Swanepoel
    
    Kyle Jonathan Clarke
    
    Henko Steyn
    

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

--------------------------------------------------------------IMPORTANT-------------------------------------------------------------------------

Please include own .env File in the Weather-App/server directory that include the following:
PORT = 3010
Key = ***Your openweather api KEY here***

-----------------------------------------------------------------------------------------------------------

If you would like to use a custom port for the server application:

Change the above "PORT = **Your PORT here**" to desired port, as well as the

    Weather-App/app/package.json "proxy":""http://localhost:**Your PORT here**/"
    
    

## Available Scripts

In the project directory, you can run:


### `npm start`

Runs both Client and Server side application

client - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

server - Open [hhtp://localhost:3010](hhtp://localhost:3010) to confirm server is running.


The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run server`

Runs the server in the development mode.

server - Open [hhtp://localhost:3010](hhtp://localhost:3010) to confirm server is running.


### `npm run client`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm update-all`

Installes all relevant dependecies on both Server and Client