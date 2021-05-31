import React, { useState } from "react"
import "./Nav.scss"

import HomeIcon from "../../assets/HomeIcon"

function Nav() {
  const [selected, setSelected] = useState<string>("Home")

  function handleSectionOnclick(selector: string) {
    setSelected(selector)
  }

  return (
    <section className="nav">
      <ul className="nav_list">
        <li
          className="nav_list_item"
          onClick={() => handleSectionOnclick("Home")}
        >
          <HomeIcon
            className={
              selected === "Home"
                ? "nav_list_item_icon nav_list_item_icon-active"
                : "nav_list_item_icon"
            }
          />
        </li>
        <li
          className="nav_list_item"
          onClick={() => handleSectionOnclick("Feed")}
        >
          <HomeIcon
            className={
              selected === "Feed"
                ? "nav_list_item_icon nav_list_item_icon-active"
                : "nav_list_item_icon"
            }
          />
        </li>
        <li
          className="nav_list_item"
          onClick={() => handleSectionOnclick("Group")}
        >
          <HomeIcon
            className={
              selected === "Group"
                ? "nav_list_item_icon nav_list_item_icon-active"
                : "nav_list_item_icon"
            }
          />
        </li>
      </ul>
    </section>
  )
}

export default Nav
