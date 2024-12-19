import React, { useState } from "react"

type FormData = {
  firstname: string
  lastname: string
  age: number
  favoriteFoods: string[]
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  })

  const [isSubmitted, setIsSubmitted] = useState<boolean | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prevState) => {
        const favoriteFoods = checked
          ? [...prevState.favoriteFoods, value]
          : prevState.favoriteFoods.filter((food) => food !== value)
        return { ...prevState, favoriteFoods }
      })
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: [],
    })
    setIsSubmitted(false)
  }

  return (
    <div>
      <h1>User Form</h1>
      <form className="field" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              onChange={handleChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              onChange={handleChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              onChange={handleChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              onChange={handleChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              onChange={handleChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
        <button type="submit">Display User</button>
        <button onClick={handleClear}>Clear</button>
      </form>

      <div className="output">
        {/* Display the greeting here */}
        {isSubmitted ? (
          <p>
            Hello {formData.firstname}
            {formData.lastname}.You are {formData.age} and your favorite foods
            are :{formData.favoriteFoods.join(", ")}.
          </p>
        ) : (
          <p>Please submit form :(</p>
        )}
      </div>
    </div>
  )
}

export default App
