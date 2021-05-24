import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
  const { id, image, title, address, description } = props.meetup;
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorites({
        id: id,
        title: title,
        description: description,
        image: image,
        address: address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} width='500' />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <div>{address}</div>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
