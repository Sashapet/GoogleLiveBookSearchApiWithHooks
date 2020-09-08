import React from 'react';
import Content from './components/Content';
import useFetch from './helpers/useFetch';
import {useForm} from 'react-hook-form';

function App() {

const {register, watch} = useForm({  //useForm Hook
});

var search = watch("search");  //Watching every typed letter

if(!search)  //Declaring search to "*" in order to avoid 400 error (passing nothing)
    search = "*"

var elem = document.getElementsByClassName('content')[0]; //If nothing passed, add class and show nothing
if (search == "*" && elem)
    elem.classList.add('noContent');
else if(elem)
    elem.classList.remove('noContent')
//Passing search with API link to useFetch hook, saving data and loading process
const {data, loading} = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);

  return (
      <div className="app">
      { !loading && <h1>Loading</h1>}
          <div className="headerFlex">
              <div className="headerLogo">
                  <h1 className="logo">GoogleBookDataBase</h1>
              </div>
              <div className="headerSearch">
                <input className="search" autocomplete="off" type="text" ref={register} name="search" placeholder="Live Search" />
              </div>
          </div>
          <div className="content">
              <div className="container">
                <Content data={data} line="1" />
                <Content data={data} line="2" />
              </div>
          </div>
      </div>
  );
}

export default App;
