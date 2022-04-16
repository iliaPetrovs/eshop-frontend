import React from 'react'

export default function Login() {
  return (
    <div>
        <a href={`http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect`}>Login with Google</a>
    </div>
  )
}
