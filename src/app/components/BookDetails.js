import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';

const renderBookAuthors = authors => (
  <div className="book-details__item book-details__authors">
    <label>{'Autor' + (authors.length > 1 ? 'es' : '')}</label>
    <ul>
      {authors.map(author =>
        <li key={author}>{author}</li>
      )}
    </ul>
  </div>
);

const renderDeatail = (label, value) => (
  <div className="book-details__item">
    <label>{label}</label>
    <span>{value}</span>
  </div>
);

const renderButtonOpenBook = link => (
  <div className="book-details__open-content-container">
    <RaisedButton
      label="Ver conteúdo"
      labelPosition="before"
      icon={<ActionOpenInNew/>}
      href={link}
      target="_blank"
      />
  </div>
);

const BookDetails = ({book}) => (
  <div className="book-details">
    <h1>{book.volumeInfo.title}</h1>

    {book.volumeInfo.authors &&
      renderBookAuthors(book.volumeInfo.authors)
    }

    {book.volumeInfo.publisher &&
      renderDeatail('Editora', book.volumeInfo.publisher)
    }

    {book.volumeInfo.publishedDate &&
      renderDeatail('Publicado em', book.volumeInfo.publishedDate)
    }

    {book.volumeInfo.description &&
      renderDeatail('Descrição', book.volumeInfo.description)
    }

    {book.selfLink &&
      renderButtonOpenBook(book.selfLink)
    }
  </div>
);

BookDetails.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookDetails;
