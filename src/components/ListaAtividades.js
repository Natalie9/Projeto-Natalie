import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {

        margin: theme.spacing.unit,

    },
});

function ListaAtividades(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="outlined" color="secondary" className={classes.button}>
                Estágio
             </Button>

            <Button variant="outlined" color="secondary" className={classes.button}>
                Filmes
             </Button>
        </div>
    );
}

ListaAtividades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListaAtividades);