import '../styles/globals.css';
import{Provider, createClient} from "urql";
import Nav from '../components/Nav';
import {StateContext} from '../lib/Context';

const client= createClient({url: "http://localhost:1337/graphql"}); //backend api

function App({ Component, pageProps }) {
  return(
    <StateContext>
      <Provider value={client}>
        <Nav/>   
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  )
}

export default App;
