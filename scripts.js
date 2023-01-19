const stars = document.getElementById('stars')
const moon = document.getElementById('moon')
const mountains_behind = document.getElementById('mountains_behind')
const bg_text = document.getElementById('bg-text')
const btn_explore = document.getElementById('btn-explore')
const mountains_front = document.getElementById('mountains_front')

const handleScroll = () => {
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px'
    mountains_front.style.top = value * 0 + 'px'
    bg_text.style.marginRight = value * 4 + 'px'
    bg_text.style.marginTop = value * 1.5 + 'px'
    btn_explore.style.marginTop = value * 0.5 + 'px'
}

window.addEventListener('scroll', handleScroll)