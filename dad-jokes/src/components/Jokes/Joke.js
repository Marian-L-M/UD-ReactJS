import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const useStyles = makeStyles((theme) =>({
    joke: {
        display: 'flex',
        borderBottom: "2px solid #eeeeee",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        padding: "1rem"
    },
    jokeButtons: {
        display: "flex",
        marginRight: "1rem",
        justifyContent: "center",
        alignItems: "center",
        width: "15%"
    },
    arrowIcon: {
        fontSize: "2rem",
        margin: 10,
        cursor: "pointer"
    },
    votesLabel: {
        fontSize: 20
    },
    jokeText: {
        width: "75%",
        fontSize: "1.2rem"
    },
    jokeEmoji: {
        fontize: "3rem",
        margin: "auto",
        borderRadius: "50%",
        boxShadow: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0,0,0,0.1)",
    },
}))

export default function Joke(props) {
    const { votes, text} = props
    const classes = useStyles()
    return (
        <Box className={classes.joke}>
            <Box className={classes.jokeButtons}>
                <ArrowUpwardIcon className={classes.arrowIcon}/>
                <Typography className={classes.votesLabel}>{votes}</Typography>
                <ArrowDownwardIcon className={classes.arrowIcon}/>
            </Box>
            <Box className={classes.jokeText}>
                {text}
            </Box>
            <Box className={classes.jokeEmoji}>
                <i className='em em-laughing'/>
            </Box>
        </Box>
    )
}
