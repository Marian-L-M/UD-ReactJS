import React from 'react'
import { Box, Button, Typography, Toolbar, AppBar } from "@material-ui/core"
import {Link} from 'react-router-dom'

export default function AppNavigator() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"   style={{backgroundColor: "white"}}>
            <Toolbar>
                <Link to="/colorScreen/red">
                    <Button color="inherit">Red</Button>
                </Link>
                <Link to="/colorScreen/green">
                    <Button color="inherit">Green</Button>
                </Link>
                <Link to="/colorScreen/blue">
                    <Button color="inherit">Blue</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
    </div>
  )
}
