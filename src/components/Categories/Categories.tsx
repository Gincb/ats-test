import "../Home/Home.scss"

interface Props {
  navActive: string;
  category: string;
  handleSectionOnclick: ((arg0: string) => void)
}

function Categories(props: Props) {

  return (
    <li
      className={
        props.navActive === props.category
          ? "home_header_list_item home_header_list_active-item"
          : "home_header_list_item"
      }

      onClick={() => props.handleSectionOnclick(props.category)}
    >
      {props.category}
      <span className="home_header_list_active-item_border"></span>
    </li>
  )
}

export default Categories
