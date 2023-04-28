import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/Contacts.list';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import InitialContact from './InitialContacts.json';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    // console.log('componentDidMount');
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    } else {
      this.setState({
        contacts: InitialContact,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
    // console.log('render');
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
