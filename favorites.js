export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'CleytonW',
        name: 'Cleyton Melo',
        public_repos: '167',
        followers: '345'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '300',
        followers: '120000'
      }
    ]
  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    console.log(filteredEntries)
  }
}


export class FavoritesView extends Favorites {
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update(){
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.creatRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOK) {
          this.delete(user)
        }
      }


      this.tbody.append(row)
    })
  }

  creatRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
      <img src="https://github.com/CleytonW.png" alt="Imagem de Cleyton Melo">
      <a href="https://github.com/CleytonW" target="_blank">
        <p>Cleyton Melo</p>
        <span>CleytonW</span>
      </a>
    </td>
    <td class="repositories">
      34
    </td>
    <td class="followers">
      44
    </td>
    <td>
      <button class="remove">&times;</button>
    </td>
    `

    return tr
  }

  removeAllTr() {
   

    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}