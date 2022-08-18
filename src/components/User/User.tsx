
type PropsType = {
  email: string
  age: number
}

const User: React.FC<PropsType> = (props) => {
  return (
    <div><p>{props.email}</p><p>{props.age}</p></div>  
  )
}

export default User