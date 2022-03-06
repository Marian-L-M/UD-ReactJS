import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex'
import AppNavigator from './components/AppNavigator'
import Favourites from './containers/Favourites'
import PokemonDetails from './containers/PokemonDetails'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor= { persistor }>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route exact path="/favourites" component={Favourites} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
