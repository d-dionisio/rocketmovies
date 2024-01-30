import { Container } from './styles'
import { Tag } from '../Tag'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export function Notes({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStarOutline/>      
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </footer>
      }
    </Container>
  )
}