# JWT-authorization 
Realized JWT access, refresh authorization using Node.js and React.js (Typescript template) with email account activation.

## To run:
1. In __server/.env__ you should replace:
	* __DB_URL__'s value to your data base url
	* __JWT_ACCESS_SECRET__'s and __JWT_REFRESH_SECRET__'s values to any other
	* __SMTP_USER__'s value to your email
	* __SMTP_PASSWORD__'s value to password to your email
2. In terminal enter the following:
	`cd server`
    `npm run dev`
to run the server side of application.
3. Open new terminal and enter the following:
	`cd client`
	`npm start`	 
to run the client side of application.

#### Extra settings:
* HTML markup of account activation mail can be customized in __server/service/mail-service.js__ (24-28 lines)
* Lifetime of access and refresh tokens can be set in __server/service/token-service.js__.
    - In 6th line for access token change __expiresIn__'s value to yours:
    `const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})`
    - In 7th line for refresh token change __expiresIn__'s value to yours:
    `const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})`
* Password required range can be set in __server/router/index.js__ in 9th line:
    `body('password').isLength({min: 3, max: 32})`


