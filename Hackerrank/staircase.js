const stairecase = (n) => {
  for(let i=1; i<=n; i++){
    let line = ''
    line+=Array(n-i).fill(' ').join('')
    line+=Array(i).fill('#').join('')
    console.log(line)
  }
}

stairecase(4)