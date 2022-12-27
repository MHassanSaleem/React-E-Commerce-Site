import '../styles/globals.css';
import{Provider, createClient} from "urql";
import Nav from '../components/Nav';
import {StateContext} from '../lib/Context';
import {UserProvider} from "@auth0/nextjs-auth0";

const client= createClient({url: "http://localhost:1337/graphql"}); //backend api

function App({ Component, pageProps }) {
  return(
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Nav/>   
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  )
}

export default App;
