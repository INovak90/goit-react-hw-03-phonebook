import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/Contacts.list';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContacts = newContacts => {
    const newContactsLowercase = newContacts.name.toLowerCase();
    const findContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContactsLowercase
    );
    if (findContact) {
      return alert(`${newContacts.name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContacts] };
      });
    }
  };
  changeFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filterContacts = () => {
    const toLowerCaseFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter)
    );
    return filterContacts;
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render = () => {
    return (
      <Layout>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter
          changeFilter={this.changeFilterValue}
          filter={this.state.filter}
        />
        <ContactsList
          options={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </Layout>
    );
  };
}
