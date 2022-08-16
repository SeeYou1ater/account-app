
type PropsType = {
  name: string
  age: number
}

const User: React.FC<PropsType> = (props) => {
  return (
    <div><p>{props.name}</p><p>{props.age}</p></div>  
  )
}

export default User