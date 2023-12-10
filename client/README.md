
# Skin Product Store App

  A full-stack web-app to buy high quality skin-care products.

## Tech Stack:

 React, Vite, Passportjs, Redux, Mongo, Express
 
## How to set-up and run:

  - Unzip the contents of the tar
  - move to the folder 'skin-product-store' using the `cd skin-product-store` on a terminal
  - create a `.env` file in the 'server folder' by navigating using `cd server` and set following environment variables in the file :
	  - `nano .env`
	  - `\MONGO_URL = "mongodb+srv://admin:admin@cluster0.ekw0gpp.mongodb.net/SkinProducts?retryWrites=true&w=majority"` `SercetKey = "your-secret-key"`
`PAYPAL_CLIENT_ID = Aeku9GKbX-rcwq4iczmH8JLGJOtGfZ0NxGhll6_-C2b4tjop8QIWsTFvf-QywNbld0x0GL6bAtAKnVhO`
`PAYPAL_CLIENT_SECRET = ECyMXZdbzPG0N9orCwgnT3ZxiF5C6gmyfacdsUGzK5BuaXPsctFkQTrfwt3bI2lt6jaqDo_8elBpUMup`
	- `:wq` to save and exit
  - Now, open 2 terminals, in the first one execute `cd client`, then `npm install` to install all dependencies. Then run `npm run dev` to launch the client,
  - now navigate to the second terminal, perform `cd server` , then `npm install` to install all dependencies. Then run `npm run dev` to launch the server.
- Open the `localhost:\<port>` link in your browser to view the app.

