document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const li = document.createElement('li')
    li.textContent = e.target.new_task_description.value

    const ul = document.getElementById('tasks')
    ul.appendChild(li)

    form.reset()

  })
});
