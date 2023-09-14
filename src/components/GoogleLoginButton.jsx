import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

import jwtDecode from 'jwt-decode'

const GoogleLoginButton = ({ fn }) => {
    const Login = useGoogleLogin({

        onSuccess: async tokenResponse => {
            console.log(tokenResponse);
            // const infoUser = jwtDecode(tokenResponse.credential)
            // const infoUser = jwtDecode(tokenResponse.access_token);
            // console.log(infoUser);

            const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo"), {
                headers: {
                    Authorization: "Bearer " + tokenResponse.access_token
                }
            },
    
            fn({
                email: data.email,
                name: data.given_name,
                lastname: data.family_name,
                image: data.picture,
                password:"Go" + data.sub.substring(0, 8),
                country: "Argentina", 
            }),
    
            console.log(data);
    },
    
})
    return (
        <div onClick={() => Login()} className="w-3/12 max-w-full px-1 mr-auto flex-0">
        </div>
    )
}

export default GoogleLoginButton;