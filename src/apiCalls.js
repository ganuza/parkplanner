export const getAllParksInfo = () => {
  return fetch("https://developer.nps.gov/api/v1/parks?limit=1000&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG")
  .then(res => {
    if (!res.ok) {
      throw new Error ('Server Error.')
    }
    return res.json()
  })
}

export const getSelectedPark = (parkCode) => {
  return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG`)
    .then(res => {
      if (!res.ok) {
        throw new Error ('Server Error.')
      }
      return res.json()
    })
}