import { FaUserCircle } from "react-icons/fa";
import styled from 'styled-components';
import { useRouter } from 'next/router';


export default function User(){
    const route = useRouter();

    return(
        <UserIcon onClick={()=> route.push('/api/auth/login')}>
            <FaUserCircle/>
            <h4>Profile</h4>
        </UserIcon>
    );
}

const Profile  = styled.div`
    img{
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const UserIcon = styled.div`
    text-align: right;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    cursor: pointer;
    h4{
        font-size: 0.8rem;
    }
    svg{
        font-size: 1rem;
    }
`;