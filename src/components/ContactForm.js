// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {Button, Card, CardActions, CardContent, Grid, TextField} from "@mui/material";
import {useState} from "react";

const initialInputs = {
  name: '',
  phone: '',
  email: '',
  photo: ''
};

const ContactForm = ({onAddNew}) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState(initialInputs);

  const handleOnChange = (event) => {
    setNewContact(prevState => {
      const newContactCopy = {...prevState};
      const input          = event.target;

      newContactCopy[input.name] = input.value;

      return newContactCopy;
    });
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAddNew(newContact);
    setNewContact(initialInputs);
  }

  return (
    <Card component="form" onSubmit={handleOnSubmit} variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              variant="filled"
              fullWidth
              onChange={handleOnChange}
              required
              value={newContact.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Phone"
              variant="filled"
              fullWidth
              onChange={handleOnChange}
              required
              value={newContact.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="filled"
              fullWidth
              type="email"
              onChange={handleOnChange}
              required
              value={newContact.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="photo"
              label="Photo URL"
              variant="filled"
              fullWidth
              onChange={handleOnChange}
              required
              value={newContact.photo}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button type="submit">Add New</Button>
      </CardActions>
    </Card>
  );
}

export default ContactForm;