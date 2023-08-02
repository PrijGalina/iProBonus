import React, { useEffect } from 'react';
import './App.css';
import { MobileHeader } from './containers/mobile-header';
import { Header } from './containers/header';
import { Content } from './containers/content';
import { Footer } from './containers/footer';
import { Bonuses } from './views/bonuses';
import axios from 'axios';
import {AccessKey, ClientID, DeviceID} from './utils/constants'
import { saveToken } from './services/token';
import { IAccessTokenData } from './utils/types';

const App = () => {
  useEffect(() => {
    fetchAccessToken()
  }, [])

  async function fetchAccessToken(){
    try {
      await axios.post<IAccessTokenData>('http://84.201.188.117:5021/api/v3/clients/accesstoken', {
        idClient: `${ClientID}`,
        paramValue: `${DeviceID}`,
      }, {
        headers: {
          AccessKey:  `${AccessKey}`,
        }
      }).then((response)=> {
        if(response.data.result.status !== 0){
          //error
        }
        else {
          saveToken(response.data.accessToken);
        }
      })
    }
    catch(e) {
      alert(e);
    }
  }
  
  return (
    <div className="App">
      <MobileHeader/>
      <Header/>
      <Content>
        <Bonuses/>
      </Content>
      <Footer/>
    </div>
  )
}

export default App;
