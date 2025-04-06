import { Client } from '@repo/db/client';

export default async function Home() {
    const userDetails = await Client.user.findFirst();
    console.log(userDetails);
    return (
        <div>
            username: 
            {userDetails?.password}
            password:   
            {userDetails?.username}
        </div>
    );
}
