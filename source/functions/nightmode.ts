import {setItem} from "../modules/hooks/useCookie";

let animationCount = 0

const setIsIdle = () => {
    document.getElementsByClassName("niteswitch")[0].classList.remove("idle")
    document.getElementsByClassName("niteswitch")[0].classList.add("animate")
    window.setTimeout(() => {
        document.getElementsByClassName("niteswitch")[0].classList.remove("animate")
        document.getElementsByClassName("niteswitch")[0].classList.add("idle")
    }, 2200)
}

export const onEnable = () => {
    document.body.classList.add("nite_light");
    document.body.classList.remove("nite_dark");
    if (animationCount > 0) {
        document.body.style.transition = "2s";
    }
    if (animationCount > 0) setIsIdle()
    setItem("hw_lightmode", "dark", 30)
    animationCount++;
}

export const onDisable = () => {
    document.body.classList.add("nite_dark");
    document.body.classList.remove("nite_light");
    if (animationCount > 1) {
        document.body.style.transition = "2s";
        setIsIdle()
    }
    setItem("hw_lightmode", "light", 30)
    animationCount++;
}