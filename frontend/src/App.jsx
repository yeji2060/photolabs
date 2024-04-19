import React from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

 import './App.scss';
import HomeRoute from 'routes/HomeRoute';


 const App = () => (
   <div className="App">
   <HomeRoute photos={photos} topics={topics}/>
   </div>
 )

export default App;
