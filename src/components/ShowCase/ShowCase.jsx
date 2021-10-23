import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

const ShowCaseContainer = styled(Box)(({theme}) => ({
    display: 'block',
    width: '100%',
    marginTop: theme.spacing(6)
}));

const ShowCaseHeader = styled(Box)(({theme}) => ({
    display: 'flex',
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
}));

const ShowCaseTitle = styled(Typography)(({theme}) => ({
    fontWeight: 'bold'
}));

const ShowCaseBody = styled(Box)(({theme}) => ({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: theme.spacing(2),
}));

const ShowCase = ({children, title = "", moreBtnLink = "", moreBtnText = ""}) => {
    return (
        <ShowCaseContainer>
            <ShowCaseHeader>
                <ShowCaseTitle variant='h5' component='h3'>{title}</ShowCaseTitle>
                <Button variant="outlined" size="small" component={Link} to={moreBtnLink}>{moreBtnText}</Button>
            </ShowCaseHeader>
            <ShowCaseBody>
                {children}
            </ShowCaseBody>
        </ShowCaseContainer>
    );
};

export default ShowCase;
