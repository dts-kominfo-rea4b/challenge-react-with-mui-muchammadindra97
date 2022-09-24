// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={data.photo}/>
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        secondary={
          <Detail
            phone={data.phone}
            email={data.email}
          />
        }
      />
    </ListItem>
  );
};

const Detail = ({phone, email}) => {
  return (
    <>
      {phone}
      <br />
      {email}
    </>
  );
}

export default Contact;
