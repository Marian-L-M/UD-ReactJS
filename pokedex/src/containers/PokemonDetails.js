import { CircularProgress, Box, Typography, Grid, Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { withStyles } from '@material-ui/styles'
import axios from 'axios'
import React, { Component } from 'react'
import { POKEMON_API_URL } from '../config'
import { connect } from 'react-redux'
import { toggleFavourite} from '../redux/actions'

const styles = (theme) => ({
  pokedexContainer: {
    height: '84vh',
    backgroundColor: 'black',
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 30
  },
  textTitle: {
    textTransform: "uppercase",
    fontFamily: "fantasy"
  },
  pokemonImage: {
    width: "170px",
    height: "170px",
  },
  pokemonInfoContainer: {
    bottom: 60,
    position: "absolute",
    height:"",
    width:"100%",
  },
  separator: {
    height: "0.01mm",
    width: "95%"
  },
  favorite: {
    height: 50,
    width: 100,
    marginTop: 15
  },
  text: {
    fontSize: 30
  }
})

class PokemonDetails extends Component {
   constructor(props) {
     super(props)
     this.state = {
       pokemon: null
     }
   }
   componentDidMount(){
     const { match } = this.props
     const  { id } = match?.params
     axios.get(POKEMON_API_URL + "/" + id).then((response) => {
       if(response.status >= 200 && response.status < 300){
          this.setState({pokemon: response.data})
       }
     })
   }
   favouriteChecker(pokemon) {
     let found = false
     this.props.favourites?.map((p) => {
       if(p.id === pokemon.id) {
         found = true
       }
     })
     return found
   }
  render() {
    console.log(this.props.favourites)
    const { classes } = this.props
    const {pokemon} = this.state
    if(pokemon) {
      const { name, sprites, height, weight, types } = pokemon
      return(
        <Box>
          <Box className={classes.pokedexContainer}>
            <Typography className={classes.textTitle} variant="h1">
                {name}
            </Typography>
            <img className={classes.pokemonImage} src={sprites.front_default}/>
            <Box className={classes.pokemonInfoContainer}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favorite} onClick={() => this.props.toggleFavourite(pokemon)}>
                    <FavoriteIcon style={{ color: this.favouriteChecker(pokemon) ? "red" : "white", fontSize: 50}}/>
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Name
                    <br />
                    {name}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Height
                    <br />
                    {height}0cm
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Weight
                    <br />
                    {weight}kg
                  </Typography>
                </Grid>
                {types.map((pokemonType)=>{
                  const {name} =pokemonType.type
                  return(
                    <Grid item md={2}>
                      <Typography className={classes.text}>
                        Type
                        <br />
                        {name}
                      </Typography>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      )
    } else {
      return <CircularProgress></CircularProgress>
    }
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavourite: (pokemon) => dispatch(toggleFavourite(pokemon))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PokemonDetails));
