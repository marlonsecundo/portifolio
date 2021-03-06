import { useAnimation } from 'framer-motion';
import React from 'react';
import { colors } from 'src/styles';
import { Technologies } from 'src/types';
import {
  ColumnContainer,
  PositionedContainer,
  RowContainer,
  Spacer,
} from 'src/ui-components/layout';
import { BodyText } from 'src/ui-components/typografy';

import TechCard from '../tech-card';
import { bodyTextVariants, containerVariants, getTitleVariants } from './animations';
import {
  Container,
  Title,
  WorkImage,
  Description,
  Gradient,
  TitleContainer,
  Year,
} from './styles';

interface Props {
  title: string;
  srcImg: string;
  textColor: string;
  cardColor: string;
  paddingImageBottom?: string;
  link?: string;
  srcImgWidth: string;
  technologies: Technologies[];
  expText: string;
  bulletPoints: string;
  year?: string;
  enableHoverEffect?: boolean;
}

const WorkCard: React.FC<Props> = ({
  title,
  srcImg,
  textColor,
  cardColor,
  children,
  paddingImageBottom,
  link,
  srcImgWidth,
  technologies,
  expText,
  bulletPoints,
  year,
  enableHoverEffect = true,
}) => {
  const animControls = useAnimation();
  const titleVariants = getTitleVariants(cardColor, textColor);

  const techs = technologies.map((t) => (
    <TechCard key={t.toString()} tech={t} compacted small />
  ));

  const hoverEvents = enableHoverEffect
    ? {
        onTap: () => animControls.start('focused'),
        onPanStart: () => animControls.start('focused'),
        onHoverStart: () => animControls.start('focused'),
        onHoverEnd: () => animControls.start('lostFocus'),
      }
    : {};

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container href={link} cardColor={cardColor} {...hoverEvents}>
      <Gradient color1={cardColor} />
      {year ? (
        <Year>
          <BodyText color={textColor}>{year}</BodyText>
        </Year>
      ) : (
        <></>
      )}

      <TitleContainer
        animate={animControls}
        transition={{ duration: 0.7 }}
        variants={containerVariants}
        initial={containerVariants.lostFocus}
      >
        <Spacer padding="3rem" margin="15% 0 0 0">
          <BodyText
            animate={animControls}
            variants={bodyTextVariants}
            initial={bodyTextVariants.lostFocus}
          >
            {expText}
          </BodyText>
        </Spacer>

        <Spacer padding="0rem 3rem">
          <ColumnContainer>
            <BodyText
              animate={animControls}
              variants={bodyTextVariants}
              initial={bodyTextVariants.lostFocus}
              color={colors.secondary}
            >
              BULLET POINTS
            </BodyText>
            <BodyText
              animate={animControls}
              variants={bodyTextVariants}
              initial={bodyTextVariants.lostFocus}
            >
              {bulletPoints}
            </BodyText>
          </ColumnContainer>
        </Spacer>

        <Spacer padding="3rem">
          <ColumnContainer
            initial={bodyTextVariants.lostFocus}
            animate={animControls}
            variants={bodyTextVariants}
          >
            <BodyText>TOOLS AND TECHS</BodyText>
            <RowContainer flexWrap="wrap" justifyContent="space-between">
              {techs}
            </RowContainer>
          </ColumnContainer>
        </Spacer>
      </TitleContainer>

      <PositionedContainer width="100%" height="100%">
        <Spacer margin="0rem 1rem" height="100%">
          <ColumnContainer
            justifyContent="space-between"
            alignItems="center"
            height="100%"
          >
            <Spacer />
            <Title
              animate={animControls}
              variants={titleVariants}
              textColor={textColor}
              initial={titleVariants.lostFocus}
            >
              {title}
            </Title>

            <Description textColor={textColor}>{children}</Description>
            <WorkImage
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              src={srcImg}
              srcWidth={srcImgWidth}
              paddingBottom={paddingImageBottom}
            />
          </ColumnContainer>
        </Spacer>
      </PositionedContainer>
    </Container>
  );
};

export default WorkCard;
