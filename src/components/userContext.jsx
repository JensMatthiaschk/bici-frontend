import { createContext, useEffect, useState } from 'react';
import { getProfileData, verifier } from '../authservice';

export const UserContext = createContext();

const UserDataContextProvider = (props) => {
    const [userData, setUserData] = useState();
    const [userProfileData, setUserProfileData] = useState();

    useEffect(() => {
        (async () => {
            const user = await verifier();
            setUserData(user.data)
            if (user) {
                const ProfileData = await getProfileData();
                setUserProfileData(ProfileData.data)
                // console.log('tok1', token)
                // if (!token.success) return navigate("/login");
            }
        })();
    }, [])

    return (
        <UserContext.Provider value={{
            userData, setUserData,
            userProfileData, setUserProfileData
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserDataContextProvider;
