(function () {
    async function loadComponent(id, file) {
      const el = document.getElementById(id)
      if (!el) return
  
      try {
        const res = await fetch(`./components/${file}`, { cache: 'no-store' })
        if (!res.ok) throw new Error(file)
        el.innerHTML = await res.text()
      } catch (e) {
        console.warn(`Component not loaded: ${file}`)
      }
    }
  
    if (!window.pageComponents) return
  
    window.pageComponents.forEach(c => loadComponent(c.id, c.file))
  })()
  