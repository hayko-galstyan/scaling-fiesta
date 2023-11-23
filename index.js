const buttons = document.querySelectorAll('button')
const inp = document.getElementById('inputValue')
let t = true
let action = true
function changeValue(e) {
    if(isNaN(+e.target.innerHTML)){
        let act = e.target.innerHTML
        if(act === '+' || act === '-' || act === '/' || act==='*') {
            t = true
            if(action) {
                inp.value += act
            }
            action = false
        }else if(act === '.') {
            action = true
            if(t) {
                inp.value += act
            }
            t = false;
        }else if(act === 'AC') {
            inp.value = ''
        }else if(act === '='){
            inp.value = eval(inp.value)
        }


    }else {
        inp.value += e.target.innerHTML
        action = true
    }
}

buttons.forEach(el=>el.onclick = changeValue)