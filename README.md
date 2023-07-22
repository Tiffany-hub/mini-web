# Features
Add new transactions with a description, date, and amount.
View the transaction history in a table.
Search for specific transactions based on the description.

# Components

# TransactionForm
This component allows users to add new transactions to the application. It includes input fields for the description, date, and amount of the transaction.

# SearchBar
The SearchBar component enables users to search for specific transactions based on the description. It filters the displayed transactions in real-time as the user types in the search input.

# TransactionTable
The TransactionTable component displays the list of transactions in a table format. It shows the ID, description, and amount of each transaction.

# App
The App component serves as the main entry point of the application. It integrates the TransactionForm, SearchBar, and TransactionTable components to provide a complete user interface for managing bank transactions.

# Data Source
The application fetches transaction data from a REST API at http://localhost:8001/transactions. Ensure that the API is running and providing the necessary data.


# License
This project is licensed under the MIT License.






