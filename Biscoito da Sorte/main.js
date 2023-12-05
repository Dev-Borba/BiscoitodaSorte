const luckMessages = [
  'Agora é a hora de surpreender aqueles que duvidaram de você.',
  'Valorize as pequenas conquistas! ',
  'Você nunca será velho demais para sonhar um novo sonho.',
  'Avante! Para começar, você só precisa dar o primeiro passo.',
  'Para certas coisas, não basta querer, é preciso batalhar.',
  'Abandone suas dores e não a esperança em dias melhores.',
  'Lutar sempre, vencer às vezes, desistir nunca. ',
  'Que os dias bons se tornem rotina e os ruins se tornem raros',
  'Cada dificuldade ultrapassada te faz mais forte.',
  'Seus medos morrerão de fome se você alimentar a sua motivação.',
  'Abra-se para a coragem e vá atrás dos seus sonhos.',
  'A vida retribui quem pensa positivo.',
  'Tentar é a única maneira de saber se vai dar certo.',
  'Você pode, se acreditar que pode.',
  'O sucesso é a soma das pequenas vitórias.',
  'Apenas você mesmo sabe a força que você possui.',
  'Você pode ter resultados ou desculpas, mas não os dois.',
  'O sucesso é a soma de pequenos esforços repetidos diariamente.',
  'Motivação é aquilo que te faz começar. Habito é aquilo que te faz continuar.'
];

let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
const cookie = document.querySelector('#img');
const firstScreen = document.querySelector('.home');
const secondScreen = document.querySelector('.luck');
const newCookie = document.querySelector('#openCookie');
const cookieOpen = document.querySelector('.message p');

const toggleScreen = () => {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

const handleOpenCookie = () => {
  toggleScreen()
  cookieOpen.innerText = `${randomMessage}`
}

const handleOpenNewCookie = () => {
  toggleScreen()
  location.reload()
  randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
}

const pressEnter = (e) => {
  if ( e.key == 'Enter' && firstScreen.classList.contains('hide') ) {
    handleOpenNewCookie()
  }
}

cookie.addEventListener('click', handleOpenCookie);
newCookie.addEventListener('click', handleOpenNewCookie);
document.addEventListener('keydown', pressEnter);