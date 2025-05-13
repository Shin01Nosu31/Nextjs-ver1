import sql from "@/*";

export default function Page(){
    async function addUser(formData: FormData) {
        "use server";
        const name = formData.get("name") as string;
        await sql`NSERT INTO users (name) VALUES (${name})`;
    }

    return (
        
        <form action={addUser}>
            <input type="text" name="name" />
            <button>Add user</button>
        </form>

    );
}