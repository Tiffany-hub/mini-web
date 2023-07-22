import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
const [transactions, setTransactions] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
useEffect(() => {
  fetch('http://localhost:8001/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data));
}, []);

const handleAddTransaction = (newTransaction) => {
setTransactions([...transactions, newTransaction]);
};

const handleSearch = (term) => {
setSearchTerm(term);
};

const filteredTransactions = transactions.filter((transaction) =>
transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<div>
<h1>Bank Transaction</h1>
<TransactionForm onAddTransaction={handleAddTransaction} />
<SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
<TransactionTable transactions={filteredTransactions} />
</div>
);
};

export default App;