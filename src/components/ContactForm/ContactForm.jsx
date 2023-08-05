import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormSubmit,
} from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (this.state.name === '' || this.state.value === '') {
      return;
    }
    if (
      !this.props.onSubmit({
        name: this.state.name.trim(),
        number: this.state.number,
      })
    ) {
      let valueTrim = e.currentTarget.name.value.trim();
      e.currentTarget.name.value = valueTrim;
      return;
    }
    form.reset();
    this.resetState();
  };

  render() {
    return (
      <ContactFormForm onSubmit={this.handleSubmit}>
        <ContactFormLabel>
          Name
          <ContactFormInput
            type="text"
            name="name"
            minLength="2"
            maxLength="22"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=""
            required
            onChange={this.handleChangeInput}
          />
        </ContactFormLabel>
        <ContactFormLabel>
          Number
          <ContactFormInput
            type="tel"
            name="number"
            minLength="7"
            maxLength="17"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=""
            required
            onChange={this.handleChangeInput}
          />
        </ContactFormLabel>
        <ContactFormSubmit type="submit">Add contact</ContactFormSubmit>
      </ContactFormForm>
    );
  }
}
