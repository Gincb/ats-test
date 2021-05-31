import { action, computed, makeObservable, observable, autorun } from "mobx"

import axios from "axios"

class Store {
  blocks: any[] = []
  categories: any[] = []

  constructor() {
    makeObservable(this, {
      blocks: observable,
      categories: observable,
      storeDetails: computed,
      fetchData: action,
    })
    autorun(this.logStoreDetails)
  }

  logStoreDetails = () => {
    console.log(this.storeDetails)
  }

  createBlocks = (block: { title: string; minutes: number }) => {
    this.blocks.push(block)
  }

  createCategories = (category: any) => {
    this.categories = category
  }

  get storeDetails() {
    return `Blocks: ${this.blocks.length} Categories: ${this.categories.length}`
  }

  fetchData = () => {
    axios
      .get("https://rpback.com/api/games/test_blocks?project_id=2")
      .then((block) => {
        axios
          .get("https://rpback.com/api/games/test_minutes?project_id=2")
          .then((time) => {
            time.data.minutes.map((m: any) => {
              return this.createBlocks({
                title: block.data.blocks[m.id - 1],
                minutes: m.time,
              })
            })
          })
      })

    axios
      .get("https://rpback.com/api/games/test_categories?project_id=2")
      .then((res) => {
        this.createCategories(res.data.categories)
      })
  }
}
export default Store
