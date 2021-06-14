import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const FeedbackOptions = ({ onAddReview }) => {
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Button name="good" onClick={e => onAddReview(e.currentTarget.name)}>
        Good
      </Button>
      <Button name="neutral" onClick={e => onAddReview(e.currentTarget.name)}>
        Neutral
      </Button>
      <Button name="bad" onClick={e => onAddReview(e.currentTarget.name)}>
        Bad
      </Button>
    </ButtonGroup>
  );
};

export default FeedbackOptions;
