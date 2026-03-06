class Musica {
  constructor(id, nome, artista) {
    this.id = id;
    this.nome = nome;
    this.artista = artista;
    this.next = null; 
    this.prev = null; 
  }

  toString() {
    return `[${this.id}] ${this.nome} - ${this.artista}`;
  }
}


class Playlist {
  constructor() {
    this.head = null; 
    this.tail = null; 
    this.atual = null; 
  }

  
  adicionarMusica(id, nome, artista) {
    const nova = new Musica(id, nome, artista);
    if (!this.head) {
      this.head = this.tail = nova;
    } else {
      this.tail.next = nova;
      nova.prev = this.tail;
      this.tail = nova;
    }
  }

  
  removerAtual() {
    if (!this.atual) {
      console.log("Nenhuma música para remover.");
      return;
    }

    if (this.atual === this.head && this.atual === this.tail) {
      
      this.head = this.tail = null;
    } else if (this.atual === this.head) {
      
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.atual === this.tail) {
      
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      
      this.atual.prev.next = this.atual.next;
      this.atual.next.prev = this.atual.prev;
    }

    console.log("Removida:", this.atual.toString());
    this.atual = this.head; 
  }


  listarInicioFim() {
    let temp = this.head;
    while (temp) {
      console.log(temp.toString());
      temp = temp.next;
    }
  }


  listarFimInicio() {
    let temp = this.tail;
    while (temp) {
      console.log(temp.toString());
      temp = temp.prev;
    }
  }

  
  iniciar() {
    this.atual = this.head;
    if (this.atual) {
      console.log("Tocando:", this.atual.toString());
    } else {
      console.log("Playlist vazia.");
    }
  }

  avancar() {
    if (this.atual && this.atual.next) {
      this.atual = this.atual.next;
      console.log("Tocando:", this.atual.toString());
    } else {
      console.log("Fim da playlist.");
    }
  }

  voltar() {
    if (this.atual && this.atual.prev) {
      this.atual = this.atual.prev;
      console.log("Tocando:", this.atual.toString());
    } else {
      console.log("Início da playlist.");
    }
  }
}


const playlist = new Playlist();

playlist.adicionarMusica(1, "Risk It All", "Bruno Mars");
playlist.adicionarMusica(2, "Chicago", "Michael Jackson");
playlist.adicionarMusica(3, "Linda Demais", "Roupa Nova");
playlist.adicionarMusica(4, "Velocidade da luz", "Grupo Revelação");
playlist.adicionarMusica(5, "Mágica", "Calcinha Preta");

console.log("\n--- Playlist do início ao fim ---");
playlist.listarInicioFim();

console.log("\n--- Playlist do fim ao início ---");
playlist.listarFimInicio();

console.log("\n--- Player ---");
playlist.iniciar();
playlist.avancar();
playlist.avancar();
playlist.voltar();

console.log("\n--- Removendo música atual ---");
playlist.removerAtual();

console.log("\n--- Playlist atualizada ---");
playlist.listarInicioFim();


