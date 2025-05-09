export default async function UsersPage(){
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.text();
    return (
    <div>
        <h1>About Page</h1>
        {data}
    </div>
    );
}

