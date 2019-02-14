import React from 'react';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

function Dashboard() {
  return (
    <div>
      <div>Dashboard Component</div>
      <Spinner />
      <SearchBar />
    </div>
  );
}
export default Dashboard;
