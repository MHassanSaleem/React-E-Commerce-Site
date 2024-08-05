import '../styles/globals.css';
import{Provider, createClient} from "urql";
import Nav from '../components/Nav';
import {StateContext} from '../lib/Context';
import {UserProvider} from "@auth0/nextjs-auth0/client";
import { Toaster } from 'react-hot-toast';

const client= createClient({url: "http://localhost:1337/graphql"}); //backend api

function App({ Component, pageProps }) {
  return(
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster/>
          <Nav/>   
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  )
}

export default App;
