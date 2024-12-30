export const swapPage = (navigate, url) => {
    navigate(url)
    scrollToTop()
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}