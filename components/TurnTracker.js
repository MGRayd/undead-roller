import TurnTrackerOriginal from './TurnTrackerOriginal';
import TurnTrackerDouble from './TurnTrackerDouble';
import TurnTrackerBus from './TurnTrackerBus';

export default function TurnTracker(props) {
  if (props.mode === 'doubleFeature') return <TurnTrackerDouble {...props} />;
  if (props.mode === 'schoolBus') return <TurnTrackerBus {...props} />;
  return <TurnTrackerOriginal {...props} />;
}
