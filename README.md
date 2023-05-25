# EzMoney Wallet Web

MoneyWalletWeb is a web-based application for managing personal finances and tracking expenses. This project aims to provide users with a convenient and intuitive platform to track their income, expenses, and overall financial health.

Try it now: https://ezmoney-2466e.web.app/

## Features

- **User Registration and Authentication**: Users can create an account and securely log in to the application.
- **Dashboard**: Users are presented with an overview of their finances, including account balances, income, and expenses.
- **Transaction Tracking**: Users can add, categorize, and track their income and expenses, allowing them to gain insights into their spending habits.
- **Data Privacy and Security**: User data is stored securely and protected with encryption and appropriate access controls.

## Installation

To install and run MoneyWalletWeb locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Kutz-S/MoneyWalletWeb.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MoneyWalletWeb
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

For more information about React JS Installation visit: React's docs [here](https://legacy.reactjs.org/docs/getting-started.html).

For Firebase setup and Deployment follow official docs [here](https://firebase.google.com/docs/hosting/quickstart).

## Project folder structure
- This project follows feature first folder structure.

- 📁 `src`- Contains the source codes for the project.
- 📁 `public`-  Contains the images used for the web app.
-📁`git` - Contains codes used for the uploading of the files from pc to github.

-📁`Firebase` - Contains codes specific for the connection of firebase to the web app.

-📁`node_modules` - Contains codes neccessary for the whole program to run using react js.

    

    features of the app.
        - 📁`Components` - Contains codes specific for       authentication feature of the app
            -📁`MoneyDetails` - Contains codes specific for the transaction records of the app
            -📁`MoneyManager` - Contains the specific codes for how the transaction works
            -📁`TransactionItem` - Contains the code for manipulating the data
         -📁`pages` - Contains the codes design and structure


## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js
- **Database**: Firestore
- **Authentication**: Firebase Authentication

## Contributing

Contributions to MoneyWalletWeb are welcome! If you find any issues or have suggestions for new features, please open an issue or submit a pull request. Make sure to follow the contribution guidelines when contributing to this project.
