import React, { useState, useEffect } from 'react';

import JSEditor from 'src/components/js-editor';

import logoLinkedin from 'src/assets/images/contact/linkedin.png';
import lattesLogo from 'src/assets/images/contact/lattes.png';
import githubLogo from 'src/assets/images/contact/github.png';

import ContactItem from 'src/components/contact-item';
import links from 'src/assets/data/links';
import {
  Container,
  TitleContainer,
  Title,
  JSTitle,
  Description,
  CodeContainer,
  ContactContainer,
  ContactTitle,
  AndMore,
} from './styles';

const Initial: React.FC = () => {
  const [underscore, setUnderscore] = useState('_');

  useEffect(() => {
    setInterval(() => {
      setUnderscore((prevUnderscore) => (prevUnderscore === '_' ? ' ' : '_'));
    }, 1000);
  }, []);

  return (
    <Container id="initial">
      {/* <CodeContainer
        animate={{ x: '0rem', transition: { duration: 1.5 } }}
        initial={{ x: '-5rem' }}
      >
        <JSEditor />
      </CodeContainer> */}
      <TitleContainer
        animate={{ x: '0rem', transition: { duration: 3 } }}
        initial={{ x: '5rem' }}
      >
        <JSTitle
          whileHover={{
            x: [-0, 70],
          }}
        >
          JS
        </JSTitle>
        <Title>{` Developer${underscore}`}</Title>
        <Description>Hi! I am Marlon Secundo,</Description>
        <Description>
          a fullstack developer with experience in JS technologies
        </Description>
        <Description> </Description>

        <AndMore>and more!</AndMore>
      </TitleContainer>

      <ContactContainer>
        {/* <ContactTitle>FIND ME!</ContactTitle> */}
        <ContactItem link={links.linkedin} imgSrc={logoLinkedin} />
        <ContactItem link={links.lattes} imgSrc={lattesLogo} />

        <ContactItem link={links.github} imgSrc={githubLogo} />
      </ContactContainer>
    </Container>
  );
};

export default Initial;
