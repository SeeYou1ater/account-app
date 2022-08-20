
type PropsType = {
  email: string
}

const User: React.FC<PropsType> = (props) => {
  return (
    <div><p>{props.email}</p></div>  
  )
}

export default User