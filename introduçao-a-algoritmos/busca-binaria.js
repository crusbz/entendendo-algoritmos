function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    let kick = (list[mid])

    if (kick === item) {
      return mid
    }

    if (kick > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }

  }
  return null
}

//Exemplo com números de 1 a 10 no array
const list = Array.from({ length: 10 }, (_, i) => i + 1)
binarySearch(list, 3) // retorna a posição [2] ([0] => 1, [1] => 2,  [2] => 3)
