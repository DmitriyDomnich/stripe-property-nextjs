import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Form = styled.form`
  margin-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .pencil {
    margin-left: -1.35rem;
  }
`;
const EmailInput = styled.input`
  padding: 1rem 0;
  padding-right: 1.5em;
  border: none;
  border-bottom: 1px solid #ffffff;
  position: relative;
  background-color: transparent;
  width: 50%;
  max-width: 550px;
  display: inline-block;
  color: #fff;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #637381;
  }
`;

const EmailForm = () => {
  return (
    <Form>
      <Image height={46.92} width={48} src='/images/mail-open.png' alt='mail' />
      <h5>Newsletter subscribe</h5>
      <div>Subscribe to our newsletter, we promise not to spam!</div>
      <div className='input'>
        <EmailInput placeholder='Your email address' />
        <Image
          className='pencil'
          style={{
            color: '#fff',
          }}
          height={18}
          width={18}
          src='/images/pencil.png'
          alt='pencil'
        />
      </div>
    </Form>
  );
};

export default EmailForm;
