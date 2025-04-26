export default {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            binding.value(true)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
    }
  }
  