import useCounter from '../customHooks/useCounter';

import Card from './Card';

const ForwardCounter = () => {

    const counter = useCounter(1, 1000)

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
