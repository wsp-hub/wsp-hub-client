import * as React from 'react';
import {Link as LinkRouter} from "react-router-dom";
import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://worldscipubl.com/">
                World Sci Publ
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Link sx={{width: "100%"}} component={LinkRouter} to="/" disableFocusRipple={true}>
                    <img width="100%"
                         src="https://journal.worldscipubl.com/wp-content/themes/wsp_blog/assets/images/logos/logo_black.svg"/>
                </Link>
                <Typography component="h1" variant="h5" sx={{marginTop: 2}}>
                    Войти в систему
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Войти
                    </Button>
                    <Grid container direction="column" alignItems="flex-end">
                        <Grid item xs>
                            <Link component={LinkRouter} to="/forgot" variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={LinkRouter} to="/signup" variant="body2">
                                Нет учетной записи? Зарегистрироваться
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}}/>
        </Container>
    );
}

export default SignIn;
