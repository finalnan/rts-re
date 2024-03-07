import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('hi there')}>
      asdsada
    </ChildAsFC>
  );
};

export default Parent;
