    function MapAndReducerAndFilter() {
        const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alex", age: 32 },
  { name: "Mia", age: 15 }];

        return<>
        <h1>Map, Reduce and Filter</h1>
        <h2>Map</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} - {user.age}</li>
          ))}
        </ul>

        <p>Total age</p>
        <ul>
            {users.reduce((total,user)=>total+user.age,0)};
        </ul>

        <p>Users above 18</p>
        <ul>
            {users.filter((user)=>user.age>18).map((user)=><li>{user.name} has age {user.age}</li>)}
        </ul>
        </>
    }
    export default MapAndReducerAndFilter;