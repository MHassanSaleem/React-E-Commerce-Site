import { FaUserCircle } from "react-icons/fa";
import { useRouter } from 'next/router';
import { Profile, UserIcon} from "../styles/User"
import { useUser} from "@auth0/nextjs-auth0/client";


export default function User(){
    const route = useRouter();
    const {user, error, isLoading} = useUser();
    if (!user)
    return(
        <UserIcon onClick={()=> route.push('/api/auth/login')}>
            <FaUserCircle/>
            <h4>Profile</h4>
        </UserIcon>
    );
    return(
        <Profile onClick={()=> route.push("/profile")}>
            <img src={user.picture} alt={user.name}></img>
            <h4>{user.name}</h4>
        </Profile>
    )
};