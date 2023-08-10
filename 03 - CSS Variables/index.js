const inputs = document.querySelectorAll(".controls input")

function handleClick(){
  console.log(this.value)
  let why = this.dataset.sizing || ""
  console.log(why)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + why)
}

inputs.forEach(each=>{
  each.addEventListener("mousemove",handleClick)
  each.addEventListener("change", handleClick)
})
