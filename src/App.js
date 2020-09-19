import React from 'react';
import './App.css';

import Post from './components/post'


function App() {
  

  return (
    <div className="app-container">
      {getPostsData().map(postData => <Post key={postData.id} data={postData}/>)}
    </div>
  );
}


function getPostsData(){
  return [
    {
      id: 1,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : 'O registro da beleza',
      likes : parseInt(Math.random() * 300),
      comments: [ 
        {
          user: 'Kamren',
          msg: 'Nice Job!'
        },
        {
          user: 'uzumaki',
          msg: 'Dattebayo!!'
        },
        {
          user: 'Dollyn',
          msg: 'Olho para esta foto e vejo zero defeitos.'
        },
        {
          user: 'tiktokerCuiabano',
          msg: 'LOL, posso ter essa foto emoldurada?'
        }
      ]
    },
    {
      id: 2,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : 'De hoje em diante todo dia vai ser o mais importante!',
      likes : parseInt(Math.random() * 300),
      comments: [ 
        {
          user: 'Bret',
          msg: 'Agradeço todo dia por te ter como amiga.'
        },
        {
          user: 'Andreww_',
          msg: 'Uma obra de arte!'
        },
        {
          user: 'Melo98',
          msg: "I just... Can't handle you"
        }
      ]
    },
    {
      id: 3,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : "Como você ama a si mesma é como você ensina todo mundo a te amar",
      likes : parseInt(Math.random() * 300),
      comments: [ 
      ]
    },
    {
      id: 4,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : "É a solidão que inspira os poetas, cria os artistas e anima o gênio.",
      likes : parseInt(Math.random() * 300),
      comments: [ 
        {
          user: 'Samantha',
          msg: 'So cute!'
        }
      ]
    },
    {
      id: 5,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : "A alegria não está nas coisas, está em nós.",
      likes : parseInt(Math.random() * 300),
      comments: [ 
        {
          user: 'The22k',
          msg: 'Nice Job!'
        },
        {
          user: 'noOne',
          msg: 'Não preciso de muitos, preciso só dos melhores, preciso de você!'
        },
      ]
      
    },
    {
      id: 6,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : "Viver é melhor que sonhar!",
      likes : parseInt(Math.random() * 300),
      comments: [ 
        {
          user: 'user01',
          msg: 'Beleza irresistível'
        }
      ]
    },
    {
      id: 7,
      imgURL : `https://picsum.photos/seed/${Math.random()}/500`,
      subtitle : "Viajar é mudar a roupa da alma.",
      likes : parseInt(Math.random() * 300),
      comments: [ 
        {
          user: 'Moriah.Stanton',
          msg: 'Ganhei o dia'
        }
      ]
    }
  ]
}

export default App;
