import React from 'react'
import {
	Box,
	Grid,
	Select,
	MenuItem,
	FilledInput,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	Button,
	IconButton,
	CircularProgress,
    Checkbox
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/styles';
import { Close as CloseIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function Endclass() {


    const [checked, setChecked] = React.useState({ });
   
    const handleChange = (event) => {
        setChecked(  {...checked,[event.target.name]: event.target.checked});
      };

    return (
        <>
         <Dialog open={true}>
        <DialogTitle>
            Select a Reason to End Class
        </DialogTitle>
        <DialogContent>
            
        <FormControlLabel
        control={<GreenCheckbox checked={checked.Cc} onChange={handleChange} name="Cc" />}
        label="Class completed"
      />
        <div>
<FormControlLabel
        control={<GreenCheckbox checked={checked.Ci} onChange={handleChange} name="Ci " />}
        label="Class Interrupted/Aborted"
      />
      </div>

        </DialogContent>
        </Dialog>   

        </>
    )
}

export default Endclass
