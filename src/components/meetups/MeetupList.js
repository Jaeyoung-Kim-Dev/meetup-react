import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem id={meetup.id} props={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
