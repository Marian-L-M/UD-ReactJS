# UD-ReactJS

ReactJs tutorial Mohammad Kily - Udemy

##　 Pokedex
-set up react + delete unnecessary stuff

install react-router-dom:` npm i react-router-dom@5.3.0 -s`

**Inside App.js**

```
import { BrowserRouter as Router, Route } from 'react-router-dom'
```

--> use component:
<Router>
<Route path="" />
</Router>

install material-ui

```
npm install @material-ui/core @material-ui/icons -s
```

- ...-s adds automatically to package.json

### Use effect -> does something when component is loaded

```
import React, { useEffect } from 'react'

...

export default function Pokedex() {
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
  return (
        <Box>

        </Box>
  )
}
```

**install axios**

```
npm install axios -s
```

**install redux(three libraries)**

```
npm install redux react-redux redux-persist
```
