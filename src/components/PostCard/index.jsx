import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, body, id, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title} </h1>
      <p>{body}</p>
      <span>{id}</span>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
