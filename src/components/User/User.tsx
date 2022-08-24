import './User.css'


type PropsType = {
  email: string
}

const User: React.FC<PropsType> = (props) => {
  return (
    <li>{props.email}</li>  
  )
}

export default User