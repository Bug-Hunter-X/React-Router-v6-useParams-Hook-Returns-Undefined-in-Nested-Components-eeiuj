The solution involves restructuring the component hierarchy to use the `Outlet` component to ensure that the child component only renders after the parent's params are resolved.

```javascript
//Parent.js Solution
import { Outlet, useParams } from 'react-router-dom';

function Parent() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent {parentId}</h1>
      <Outlet />
    </div>
  );
}
export default Parent;

//Child.js remains the same
import { useParams } from 'react-router-dom';

function Child() {
  let { childId } = useParams();
  console.log(childId); //Now should be defined
  return (
    <div>
      <h2>Child {childId}</h2>
    </div>
  );
}
export default Child; 
```
By using the `Outlet` component, React Router ensures that the `Child` component only renders after the parent route's parameters are resolved and available in the `useParams` hook, preventing the undefined `childId` issue.