import PropTypes from 'prop-types';

export default function FeedbackActions({ handleButtonClick }) {
    return (
        <div>
          <button type="button" name="good" onClick={handleButtonClick}>Good</button>
          <button type="button" name="neutral" onClick={handleButtonClick}>Neutral</button>
          <button type="button" name="bad" onClick={handleButtonClick}>Bad</button>
        </div>
    )
}

FeedbackActions.propTypes = {
    handleButtonClick: PropTypes.func.isRequired,
}