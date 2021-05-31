import { useState } from "react"
import "./Home.scss";
import Categories from './../Categories/Categories';
import Card from './../Card/Card'
import { observer } from "mobx-react"

interface Props {
  categories: string[];
  blocks: {title: string, minutes: number}[]
}

function Home(props: Props) {
  const [navActive, setNavActive] = useState<string>("Popular")

  function handleSectionOnclick(selector: string) {
    setNavActive(selector)
  }

  return (
    <section className="home">
      <h1 className="home_heading">Courses</h1>
      <div className="home_header">
        <ul className="home_header_list">
        {props.categories.map((m:string) => {
          return <Categories key={Math.random()+'category'} navActive={navActive} handleSectionOnclick={handleSectionOnclick} category={m}/>
        })}
        </ul>
      </div>
      <div className='home_body'>
        {props.blocks.map((block:{title:string, minutes:number}) => {
          return <Card key={Math.random()+'block'} title={block.title} minutes={block.minutes}/>
        })}
      </div>
    </section>
  )
}

export default observer(Home)
