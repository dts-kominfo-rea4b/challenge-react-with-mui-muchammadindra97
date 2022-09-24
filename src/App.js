import './App.css';
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import {useState} from "react";
import {Container, Divider, Grid, List} from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const handleOnAddNew = (newContact) => {
    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  }

  return (
    <div className="App">
      <Header />
      <Container sx={{paddingTop: 4}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <ContactForm onAddNew={handleOnAddNew} />
          </Grid>
          <Grid item xs={12} md={7}>
            <List sx={{backgroundColor: '#e0f2f1'}}>
              {contacts.map((contact, index) => {
                return (
                  <>
                    <Contact data={contact} key={index} />
                    {index !== (contacts.length - 1) && <Divider />}
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
