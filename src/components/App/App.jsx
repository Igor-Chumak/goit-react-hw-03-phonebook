import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from 'utilities/localStorage';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ContactForm,
  ContactList,
  Notification,
  Filter,
  OkButton,
} from 'components';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageKey = 'phonebook';
const localStorageTheme = localStorageKey + '_theme';

export class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: '',
    modeTheme: 'light',
    notification: '',
  };

  componentDidMount() {
    const contactsLocalStorage = loadFromLocalStorage(localStorageKey);
    if (contactsLocalStorage) {
      this.setState({ contacts: [...contactsLocalStorage] });
    }
    const themeLocalStorage = loadFromLocalStorage(localStorageTheme);
    if (themeLocalStorage === 'light' || themeLocalStorage === 'dark') {
      this.setState({ modeTheme: themeLocalStorage });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      saveToLocalStorage(localStorageKey, this.state.contacts);
    }
    if (this.state.modeTheme !== prevState.modeTheme) {
      saveToLocalStorage(localStorageTheme, this.state.modeTheme);
    }
  }

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  onSubmit = dataForm => {
    const searchResult = this.searchContact(dataForm);
    if (!searchResult) {
      this.setState(prevState => ({
        contacts: [{ id: nanoid(), ...dataForm }, ...prevState.contacts],
      }));
      return true;
    } else {
      this.setState({
        notification: `${searchResult.name} : ${searchResult.number} is already in contacts`,
      });
      return false;
    }
  };

  handleOkButton = () => {
    this.setState({
      notification: '',
    });
  };

  searchContact = ({ name }) => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleChangeInputFilter = e => {
    const inputFilter = document.getElementById('filter');
    const { value } = e.target;
    let valueNormalize = value.toLowerCase();
    inputFilter.value = valueNormalize;
    this.setState({
      filter: valueNormalize,
    });
  };

  createContactsToList = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContactsFromList = idItem => {
    return this.setState(prevValue => ({
      contacts: prevValue.contacts.filter(item => item.id !== idItem),
    }));
  };

  render() {
    return (
      <ThemeProvider
        theme={{
          ...theme,
          ...(this.state.modeTheme === 'light' ? lightTheme : darkTheme),
        }}
      >
        <GlobalStyles />
        <Header>
          <CreateThemeSwitcher
            handleToggleTheme={this.handleToggleTheme}
            modeTheme={this.state.modeTheme === 'light' ? false : true}
          />
        </Header>
        <main>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.onSubmit} />
            {this.state.notification && (
              <Notification message={this.state.notification}>
                <OkButton type="button" onClick={this.handleOkButton}>
                  OK
                </OkButton>
              </Notification>
            )}
          </Section>
          <Section title="Contacts">
            <Filter handleChangeInputFilter={this.handleChangeInputFilter} />
            <ContactList
              contactsToList={this.createContactsToList()}
              deleteContactsFromList={this.deleteContactsFromList}
            />
          </Section>
        </main>
      </ThemeProvider>
    );
  }
}
