
type PropsType = {
  email: string
  id: number
}

const User: React.FC<PropsType> = (props) => {
  return (
    <div><p>{props.email}</p><p>{props.id}</p></div>  
  )
}

export default User