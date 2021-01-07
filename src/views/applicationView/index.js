import React, { useState } from 'react';
import axios from 'axios';
import { Container, InputContainer, MainContainer } from './styles';
import { TextInput } from '../../ui';
import { Button } from '../../ui';
import { Api } from '../../api';

export const ApplicationView = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [found, setFound] = useState('');
  const [reason, setReason] = useState('');
  const [info, setInfo] = useState('');

  const [isSent, setIsSent] = useState(false);

  const [error, setError] = useState(false);

  const payload = {
    firstName: firstname,
    lastName: lastname,
    email,
    phone,
    howFoundUs: found,
    whatBringsToUs: reason,
    furtherInformation: info,
  };

  const storageInfo = async () => {
    const data = await axios
      .post(Api.signup(), payload)
      .catch((err) => setError(err));

    if (data) {
      setIsSent(true);
    }
  };

  const isEmpty = (value) => value.length < 1;
  const isDisabled =
    isEmpty(firstname) || isEmpty(lastname) || isEmpty(email) || isEmpty(phone);

  const ErrorMessage = () => <p>There was an error processing your request.</p>;
  const renderSuccessMessage = () => (
    <Container>
      <p>Your application was sent successfully</p>
    </Container>
  );

  const renderApplicationForm = () => (
    <Container>
      <InputContainer>
        <TextInput
          labelText="First name"
          onChangeEvent={(ev) => setFirstname(ev.target.value)}
          type="text"
          value={firstname}
          width="220px"
        />
        <TextInput
          labelText="Last name"
          onChangeEvent={(ev) => setLastname(ev.target.value)}
          type="text"
          value={lastname}
          width="220px"
        />
      </InputContainer>
      <InputContainer>
        <TextInput
          labelText="Email"
          onChangeEvent={(ev) => setEmail(ev.target.value)}
          type="email"
          value={email}
          width="220px"
        />
        <TextInput
          labelText="Phone"
          onChangeEvent={(ev) => setPhone(ev.target.value)}
          type="text"
          value={phone}
          width="220px"
        />
      </InputContainer>
      <TextInput
        labelText="How did you find us?"
        onChangeEvent={(ev) => setFound(ev.target.value)}
        type="text"
        value={found}
        width="400px"
      />
      <TextInput
        labelText="Why are you applying?"
        onChangeEvent={(ev) => setReason(ev.target.value)}
        type="text"
        value={reason}
        width="400px"
      />
      <TextInput
        labelText="Further information"
        onChangeEvent={(ev) => setInfo(ev.target.value)}
        type="text"
        value={info}
        width="400px"
      />

      <div id="error">{error ? <ErrorMessage /> : ''}</div>

      <Button
        disabled={isDisabled}
        onClickEvent={() => storageInfo()}
        width="150px"
      >
        Send
      </Button>
    </Container>
  );

  return (
    <MainContainer>
      {isSent ? renderSuccessMessage() : renderApplicationForm()}
    </MainContainer>
  );
};
